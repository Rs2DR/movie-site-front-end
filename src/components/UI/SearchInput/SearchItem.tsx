import { LocalShortMediaData } from '../../../types/Media';
import styles from './styles.module.scss';

export default function SearchItem({
	title,
	poster,
	type,
	year,
}: LocalShortMediaData) {
	return (
		<li className={styles['search-item']}>
			<img src={poster} alt={title} />
			<div className={styles.description}>
				<span className={styles.title}>{title}</span>
				<span className={styles.type}>{type}</span>
				<span className={styles.year}>{year}</span>
			</div>
		</li>
	);
}
