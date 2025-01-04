import { useEffect, useState } from 'react';
import MuiPagination from '../../components/UI/Pagination';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	fetchSeries,
	selectSeries,
	selectTotalPages,
} from '../../store/seriesSlice';
import SeriesOnPage from './SeriesOnPage';
import styles from './styles.module.scss';

export default function Series() {
	const [currentPage, setCurrentPage] = useState(1);
	const series = useAppSelector(selectSeries);
	const totalPages = useAppSelector(selectTotalPages);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchSeries(currentPage));
		window.scrollTo(0, 0);
	}, [currentPage, dispatch]);

	return (
		<main className={styles.wrapper}>
			<SeriesOnPage series={series} />
			<MuiPagination
				count={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</main>
	);
}
