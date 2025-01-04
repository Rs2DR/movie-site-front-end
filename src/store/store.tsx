import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import searchReducer from './searchSlice';
import seriesReducer from './seriesSlice';

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		series: seriesReducer,
		search: searchReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
