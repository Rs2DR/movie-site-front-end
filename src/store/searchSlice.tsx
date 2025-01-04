import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LocalShortMediaData } from '../types/Media';
import { Status } from '../types/Status';
import { OMDbApi } from '../utils/Api';
import { converShortMediaDataToLocal } from '../utils/convertType';
import { RootState } from './store';

interface SearchState {
	content: LocalShortMediaData[];
	status: Status;
	error: string | null;
}

const initialState: SearchState = {
	content: [],
	status: 'idle',
	error: null,
};

export const fetchMediaContentByTitle = createAsyncThunk<
	LocalShortMediaData[],
	string,
	{ rejectValue: string }
>(
	'searchSlice/fetchMediaContentByTitle',
	async (queary, { rejectWithValue }) => {
		try {
			const response = await OMDbApi.getMediaContentByTitle(queary);

			if (!response || 'error' in response)
				throw new Error('No response from API');

			return response.map(item => converShortMediaDataToLocal(item));
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'Unknown error';
			return rejectWithValue(errorMessage);
		}
	}
);

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		clearSearchContent: state => {
			state.content = [];
			state.status = 'loading';
		},
	},
	extraReducers: builder =>
		builder
			.addCase(fetchMediaContentByTitle.pending, state => {
				state.status = 'loading';
				state.content = [];
				state.error = null;
			})
			.addCase(fetchMediaContentByTitle.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.content = action.payload;
			})
			.addCase(fetchMediaContentByTitle.rejected, (state, action) => {
				state.status = 'failed';
				state.content = [];
				state.error = action.payload || 'An error has occurred';
			}),
});

export const selectSearchContent = (state: RootState) => state.search.content;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const { clearSearchContent } = searchSlice.actions;

export default searchSlice.reducer;
