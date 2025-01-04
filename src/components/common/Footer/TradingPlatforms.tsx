import { Link } from 'react-router-dom';
import { Image } from './Footer';
import styles from './style.module.scss';

interface TradingPlatformsProps {
	platforms: Image[];
}

export default function TradingPlatforms({ platforms }: TradingPlatformsProps) {
	return (
		<ul className={styles.platforms}>
			{platforms.map(platform => (
				<li key={platform.title}>
					<Link to={platform.path}>
						<img
							src={platform.image}
							alt={platform.title}
							title={platform.title}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}
