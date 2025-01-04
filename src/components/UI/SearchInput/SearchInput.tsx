import { useEffect, useState } from 'react';
import SearchIcon from '../../../assets/icons/icons_search.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
	clearSearchContent,
	fetchMediaContentByTitle,
	selectSearchStatus,
} from '../../../store/searchSlice';
import SearchBar from './SearchBar';
import styles from './styles.module.scss';

export default function SearchInput() {
	const [searchValue, setSearchValue] = useState('');
	const [debounceValue, setDebounceValue] = useState('');
	const [isFocus, setFocus] = useState(false);
	const dispatch = useAppDispatch();
	const status = useAppSelector(selectSearchStatus);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(searchValue);
		}, 1000);

		return () => {
			clearTimeout(timer);
			dispatch(clearSearchContent());
		};
	}, [searchValue, dispatch]);

	useEffect(() => {
		if (debounceValue) {
			dispatch(fetchMediaContentByTitle(debounceValue));
		}
	}, [debounceValue, dispatch]);

	const handleFocus = () => {
		setFocus(true);
	};

	const handleBlur = () => {
		setFocus(false);
	};

	return (
		<div className={styles.search}>
			<img src={SearchIcon} alt='search' title='Search' />
			<input
				value={searchValue}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				type='text'
				placeholder='Search'
			/>
			{isFocus && searchValue && status !== 'idle' && <SearchBar />}
		</div>
	);
}
