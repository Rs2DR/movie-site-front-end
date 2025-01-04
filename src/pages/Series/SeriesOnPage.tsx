import MediaCard from '../../components/UI/MediaCard/MediaCard';
import { LocalShortMediaData } from '../../types/Media';
import styles from './styles.module.scss';

interface SeriesOnPage {
	series: LocalShortMediaData[];
}

export default function SeriesOnPage({ series }: SeriesOnPage) {
	return (
		<div className={styles.container}>
			{series.map(serie => (
				<MediaCard key={serie.title + serie.year} {...serie} />
			))}
		</div>
	);
}
