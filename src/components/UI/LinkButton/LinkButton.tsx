import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface LinkButtonProps {
	children: React.ReactNode;
	link: string;
}

export default function LinkButton({ link, children }: LinkButtonProps) {
	return (
		<Link to={link} className={styles.link}>
			{children}
		</Link>
	);
}
