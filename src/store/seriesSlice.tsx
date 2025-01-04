import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LocalShortMediaData } from '../types/Media';
import { Status } from '../types/Status';
import { OMDbApi } from '../utils/Api';
import { converShortMediaDataToLocal } from '../utils/convertType';
import { RootState } from './store';

interface SeriesState {
	series: LocalShortMediaData[];
	totalPages: number;
	status: Status;
	error: string | null;
}

const initialState: SeriesState = {
	series: [],
	totalPages: 0,
	status: 'idle',
	error: null,
};

export const fetchRandomSeries = createAsyncThunk<
	LocalShortMediaData[],
	void,
	{ rejectValue: string }
>('seriesSlice/fetchRandomSeries', async (_, { rejectWithValue }) => {
	try {
		const response = await OMDbApi.getMediaContent(1, 'series');

		if (!response || 'error' in response)
			throw new Error('No response from API');

		const series = response.content;

		return series.slice(0, 7).map(serie => converShortMediaDataToLocal(serie));
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Unknown error';
		return rejectWithValue(errorMessage);
	}
});

export const fetchSeries = createAsyncThunk<
	{ series: LocalShortMediaData[]; totalResult: number },
	number,
	{ rejectValue: string }
>('seriesSlice/fetchSeries', async (page, { rejectWithValue }) => {
	try {
		const response = await OMDbApi.getMediaContent(page, 'series');

		if (!response || 'error' in response)
			throw new Error('No response from API');

		const series = response.content.map(serie =>
			converShortMediaDataToLocal(serie)
		);
		return { series, totalResult: response.totalPages };
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Unknown error';
		return rejectWithValue(errorMessage);
	}
});

export const seriesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRandomSeries.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchRandomSeries.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.series = action.payload;
			})
			.addCase(fetchRandomSeries.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'An error has occurred';
			})
			.addCase(fetchSeries.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchSeries.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.series = action.payload.series;
				state.totalPages = Math.ceil(action.payload.totalResult / 10);
			})
			.addCase(fetchSeries.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || 'An error has occurred';
			});
	},
});

export const selectSeries = (state: RootState) => state.series.series;
export const selectTotalPages = (state: RootState) => state.series.totalPages;

export default seriesSlice.reducer;
