import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/icons/logo.svg';
import styles from './styles..module.scss';

const items = [
	{
		title: 'Movies',
		path: '/movies',
	},
	{
		title: 'Series',
		path: '/series',
	},
];

export default function Navigation() {
	const location = useLocation();

	return (
		<nav className={styles.navigation}>
			<Link to='/'>
				<img src={Logo} alt='logo' title='OnAir' width='97' height='52' />
			</Link>
			<ul className={styles.list}>
				{items.map(item => (
					<li key={item.title} className={styles.item}>
						<Link
							className={location.pathname === item.path ? styles.active : ''}
							to={item.path}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
