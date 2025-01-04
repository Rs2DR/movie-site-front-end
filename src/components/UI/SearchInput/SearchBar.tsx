import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import {
	selectSearchContent,
	selectSearchStatus,
} from '../../../store/searchSlice';
import SearchItem from './SearchItem';
import styles from './styles.module.scss';

export default function SearchBar() {
	const content = useAppSelector(selectSearchContent);
	const status = useAppSelector(selectSearchStatus);

	return (
		<ul
			className={styles['search-bar']}
			style={{
				...(status === 'loading' || status === 'failed'
					? {
							minHeight: '15rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
					  }
					: {}),
			}}
		>
			{status === 'loaded' && content ? (
				content.map(item => (
					<SearchItem key={item.title + item.year + item.type} {...item} />
				))
			) : status === 'loading' ? (
				<CircularProgress />
			) : (
				<span className={styles['nothing-found']}>Nothing found</span>
			)}
		</ul>
	);
}
