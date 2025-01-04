import { LocalShortMediaData } from '../../../types/Media';
import styles from './style.module.scss';

export default function MediaCard({
	title,
	poster,
	type,
	year,
}: LocalShortMediaData) {
	return (
		<div className={styles.card}>
			<img src={poster} alt={title} className={styles.poster} />
			<div className={styles.info}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.type}>{type}</p>
				<p className={styles.year}>{year}</p>
			</div>
		</div>
	);
}
