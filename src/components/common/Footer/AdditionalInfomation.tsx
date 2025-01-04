import { Link } from 'react-router-dom';
import { LinkParams } from './Footer';
import styles from './style.module.scss';

export interface AdditionalInfomationProps {
	links: LinkParams[];
}

export default function AdditionalInfomation({
	links,
}: AdditionalInfomationProps) {
	return (
		<ul className={styles.additional}>
			{links.map(link => (
				<li key={link.title}>
					<Link to={link.path}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
}
