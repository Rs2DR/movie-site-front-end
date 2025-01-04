import axios from 'axios';
import { ShortMediaData } from '../types/Media';
import { ApiError } from './ApiError';

export type keyWords = 'movies' | 'series';

export class OMDbApi {
	private static apiKey = import.meta.env.VITE_API_KEY;
	private static baseUrl = import.meta.env.VITE_API_BASE_URL;

	public static getMediaContentByTitle = async (
		query: string
	): Promise<ShortMediaData[] | { error: string }> => {
		try {
			const response = await axios.get(this.baseUrl, {
				params: {
					apiKey: this.apiKey,
					s: query,
					page: 1,
				},
			});

			if (response.data.Response === 'False')
				throw new Error(response.data.Error || 'Неизвестная ошибка API');

			return response.data.Search;
		} catch (error) {
			return ApiError.check(error);
		}
	};

	public static getMediaContent = async (
		page: number,
		query: keyWords
	): Promise<
		{ content: ShortMediaData[]; totalPages: number } | { error: string }
	> => {
		const result: ShortMediaData[] = [];
		let totalPages = 0;

		try {
			const response = await axios.get(this.baseUrl, {
				params: {
					apikey: this.apiKey,
					s: query,
					page: page,
				},
			});

			if (response.data.Response === 'False')
				throw new Error(response.data.Error || 'Неизвестная ошибка API');

			result.push(...response.data.Search);
			totalPages = response.data.totalResults;

			return { content: result, totalPages };
		} catch (error) {
			return ApiError.check(error);
		}
	};
}
