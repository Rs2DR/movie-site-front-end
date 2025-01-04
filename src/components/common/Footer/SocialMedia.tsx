import { Link } from 'react-router-dom';
import { Image } from './Footer';
import styles from './style.module.scss';

export interface SocialMediaProps {
	media: Image[];
}

export default function SocialMedia({ media }: SocialMediaProps) {
	return (
		<ul className={styles.media}>
			{media.map(obj => (
				<li key={obj.title}>
					<Link to={obj.path}>
						<img src={obj.image} alt={obj.title} title={obj.title} />
					</Link>
				</li>
			))}
		</ul>
	);
}
