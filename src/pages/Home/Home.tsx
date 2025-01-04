import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchRandomMovies, selectMovies } from '../../store/moviesSlice';
import { fetchRandomSeries, selectSeries } from '../../store/seriesSlice';
import About from '../About/About';
import MediaContentSection from './MediaContentSection';
import Slider from './Slider/Slider';
import styles from './styles.module.scss';

export default function Home() {
	const movies = useAppSelector(selectMovies);
	const series = useAppSelector(selectSeries);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchRandomMovies());
		dispatch(fetchRandomSeries());
	}, []);

	return (
		<main className={styles.main}>
			<Slider />
			<About />
			<MediaContentSection title='Recommended Series' content={series} />
			<MediaContentSection title='New Movies' content={movies} />
		</main>
	);
}
