import MediaCard from '../../components/UI/MediaCard/MediaCard';
import { LocalShortMediaData } from '../../types/Media';
import styles from './styles.module.scss';

interface MoviesOnPage {
	movies: LocalShortMediaData[];
}

export default function MoviesOnPage({ movies }: MoviesOnPage) {
	return (
		<div className={styles.container}>
			{movies.map(movie => (
				<MediaCard key={movie.title + movie.year} {...movie} />
			))}
		</div>
	);
}
