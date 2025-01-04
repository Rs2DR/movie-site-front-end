import SearchInput from '../../UI/SearchInput/SearchInput';
import Navigation from './Navigation';
import styles from './styles..module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<Navigation />
			<SearchInput />
		</header>
	);
}
