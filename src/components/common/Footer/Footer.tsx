import Logo from '../../../assets/icons/logo-2.svg';

import { Link } from 'react-router-dom';
import FacebookIcon from '../../../assets/icons/facebook-icon.svg';
import InstagrammIcon from '../../../assets/icons/instagramm-icon.svg';
import TwitterIcon from '../../../assets/icons/twitter-icon.svg';
import YouTubeIcon from '../../../assets/icons/youtube-icon.svg';
import AppleStore from '../../../assets/images/apple-store.png';
import GoogleStore from '../../../assets/images/google-play.png';
import AdditionalInfomation from './AdditionalInfomation';
import Chapter, { ChapterProps } from './Chapter';
import SocialMedia from './SocialMedia';
import styles from './style.module.scss';
import TradingPlatforms from './TradingPlatforms';

export interface LinkParams {
	title: string;
	path: string;
}

export interface Image extends LinkParams {
	image: string;
}

const platforms: Image[] = [
	{
		title: 'apple store',
		image: AppleStore,
		path: '#',
	},
	{
		title: 'google play',
		image: GoogleStore,
		path: '#',
	},
];

const media: Image[] = [
	{
		title: 'facebook',
		image: FacebookIcon,
		path: '#',
	},
	{
		title: 'instagramm',
		image: InstagrammIcon,
		path: '#',
	},
	{
		title: 'twitter',
		image: TwitterIcon,
		path: '#',
	},
	{
		title: 'youtube',
		image: YouTubeIcon,
		path: '#',
	},
];

const links: LinkParams[] = [
	{
		title: 'Terms of use',
		path: '#',
	},
	{
		title: 'Privacy Policy',
		path: '#',
	},
	{
		title: 'SiteMap',
		path: '#',
	},
];

const movies: ChapterProps = {
	title: 'Movies',
	points: [
		{ title: 'Lock Upp', path: '#' },
		{ title: 'Pavitra Rishta', path: '#' },
		{ title: 'Girgit', path: '#' },
		{ title: 'Hai Taubba Season 3', path: '#' },
		{ title: 'Cartel', path: '#' },
		{ title: 'Crimes And Confessions', path: '#' },
		{ title: 'Puncch Beat Season 2', path: '#' },
		{ title: 'Broken But Beautiful Season 3', path: '#' },
	],
};
const series: ChapterProps = {
	title: 'Series',
	points: [
		{ title: 'X.X.X. Season 2', path: '#' },
		{ title: 'Gandii Baat Season 5', path: '#' },
		{ title: 'Gandii Baat Season 6', path: '#' },
		{ title: 'Broken But Beautiful Season 1', path: '#' },
		{ title: 'Broken But Beautiful Season 2', path: '#' },
		{ title: 'Class Of 2020', path: '#' },
		{ title: 'Bekaaboo Season 1', path: '#' },
		{ title: 'Ragini MMS Returns Season 2', path: '#' },
	],
};

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<Link to='/'>
					<img src={Logo} alt='logo' title='OnAir' className={styles.logo} />
				</Link>
				<span>
					Hot Africa, we offer original, exclusive <br />
					and premium stories. Everything you <br />
					want to watch, anytime, anywhere and <br />
					as much
				</span>
				<TradingPlatforms platforms={platforms} />
				<SocialMedia media={media} />
				<AdditionalInfomation links={links} />
			</div>
			<div>
				<Chapter {...movies} />
				<Chapter {...series} />
			</div>
		</footer>
	);
}
