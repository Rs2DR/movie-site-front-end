export type LocalFullMediaData = {
	title: string;
	year: number;
	released: string;
	runtime: string;
	genre: string;
	director: string;
	writer: string;
	actors: string;
	plot: string;
	language: string;
	country: string;
	poster: string;
	ratings: Rating[];
	type: string;
};

export type ShortMediaData = Pick<
	FullMediaData,
	'Title' | 'Year' | 'Type' | 'Poster'
>;
export type LocalShortMediaData = Pick<
	LocalFullMediaData,
	'title' | 'year' | 'type' | 'poster'
>;

export type FullMediaData = {
	Title: string;
	Year: number;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Poster: string;
	Ratings: Rating[];
	Type: string;
};

export type Rating = {
	Source: string;
	Value: string;
};
