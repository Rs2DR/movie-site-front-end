import { Link } from 'react-router-dom';
import { LinkParams } from './Footer';
import styles from './style.module.scss';

export interface ChapterProps {
	title: string;
	points: LinkParams[];
}

export default function Chapter({ title, points }: ChapterProps) {
	return (
		<div>
			<h5>{title}</h5>
			<ul className={styles.chapter}>
				{points.map(point => (
					<li key={point.title}>
						<Link to={point.path}>{point.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
