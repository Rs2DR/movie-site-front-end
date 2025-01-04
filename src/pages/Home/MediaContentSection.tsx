import ContentCard from '../../components/UI/MediaCard/MediaCard';
import { LocalShortMediaData } from '../../types/Media';
import styles from './styles.module.scss';

interface MediaContentSectionProps {
	title: string;
	content: LocalShortMediaData[];
}

export default function MediaContentSection({
	content,
	title,
}: MediaContentSectionProps) {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			<div>
				{content.map(item => (
					<ContentCard key={item.title + item.year} {...item} />
				))}
			</div>
		</div>
	);
}
