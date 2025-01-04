import { useEffect, useState } from 'react';
import MuiPagination from '../../components/UI/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchMovies,
	selectMovies,
	selectTotalPages,
} from '../../store/moviesSlice';
import MoviesOnPage from './MoviesOnPage';
import styles from './styles.module.scss';

export default function Movies() {
	const [currentPage, setCurrentPage] = useState(1);
	const movies = useAppSelector(selectMovies);
	const totalPages = useAppSelector(selectTotalPages);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchMovies(currentPage));
		window.scrollTo(0, 0);
	}, [currentPage, dispatch]);

	return (
		<main className={styles.wrapper}>
			<MoviesOnPage movies={movies} />
			<MuiPagination
				count={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</main>
	);
}
