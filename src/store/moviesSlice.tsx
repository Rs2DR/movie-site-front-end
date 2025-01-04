import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LocalShortMediaData } from '../types/Media';
import { Status } from '../types/Status';
import { OMDbApi } from '../utils/Api';
import { converShortMediaDataToLocal } from '../utils/convertType';
import { RootState } from './store';

interface MoviesState {
	movies: LocalShortMediaData[];
	totalPages: number;
	status: Status;
	error: string | null;
}

const initialState: MoviesState = {
	movies: [],
	totalPages: 0,
	status: 'idle',
	error: null,
};

export const fetchRandomMovies = createAsyncThunk<
	LocalShortMediaData[],
	void,
	{ rejectValue: string }
>('moviesSlice/fetchRandomMovies', async (_, { rejectWithValue }) => {
	try {
		const response = await OMDbApi.getMediaContent(1, 'movies');

		if (!response || 'error' in response) throw new Error(response.error);

		const movies = response.content;

		return movies.slice(0, 7).map(movie => converShortMediaDataToLocal(movie));
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Unknown error';
		return rejectWithValue(errorMessage);
	}
});

export const fetchMovies = createAsyncThunk<
	{ movies: LocalShortMediaData[]; totalResult: number },
	number,
	{ rejectValue: string }
>('moviesSlice/fetchMovies', async (page, { rejectWithValue }) => {
	try {
		const response = await OMDbApi.getMediaContent(page, 'movies');

		if (!response || 'error' in response)
			throw new Error('No response from API');

		const movies = response.content.map(movie =>
			converShortMediaDataToLocal(movie)
		);
		return { movies, totalResult: response.totalPages };
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Unknown error';
		return rejectWithValue(errorMessage);
	}
});

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRandomMovies.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchRandomMovies.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.movies = action.payload;
			})
			.addCase(fetchRandomMovies.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'An error has occurred';
			})
			.addCase(fetchMovies.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.movies = action.payload.movies;
				state.totalPages = Math.ceil(action.payload.totalResult / 10);
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'An error has occurred';
			});
	},
});

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectTotalPages = (state: RootState) => state.movies.totalPages;

export default moviesSlice.reducer;
