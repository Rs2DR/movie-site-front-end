import {
	FullMediaData,
	LocalFullMediaData,
	LocalShortMediaData,
	ShortMediaData,
} from '../types/Media';

export const convertFullMediaDataToLocal = (obj: FullMediaData) => {
	const newObj: LocalFullMediaData = {
		title: obj.Title,
		year: obj.Year,
		released: obj.Released,
		runtime: obj.Runtime,
		genre: obj.Genre,
		director: obj.Director,
		writer: obj.Writer,
		actors: obj.Actors,
		plot: obj.Plot,
		language: obj.Language,
		country: obj.Country,
		poster: obj.Poster,
		ratings: obj.Ratings,
		type: obj.Type,
	};

	return newObj;
};

export const converShortMediaDataToLocal = (obj: ShortMediaData) => {
	const newObj: LocalShortMediaData = {
		title: obj.Title,
		poster: obj.Poster,
		type: obj.Type,
		year: obj.Year,
	};

	return newObj;
};
