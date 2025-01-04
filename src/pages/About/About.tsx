import HomeImage from '../../assets/images/home-image.png';
import styles from './styles.module.scss';

export default function About() {
	return (
		<div className={styles.about}>
			<div className={styles.description}>
				<h1>About us</h1>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do
					ametsint. Velit <br />
					officia consequat duis enim velit mollit. Exercitation veniam
					consequat sunt <br /> nostrud amet. Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do <br /> amet sint. Velit officia
					consequat duis enim velit mollit. <br />
				</p>
				<p>
					Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non
					<br />
					deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
					consequat duis <br /> enim velit mollit. Exercitation veniam consequat
					sunt nostrud amet.
				</p>
				<div className={styles.statistics}>
					<div>
						<span>10,000+</span>
						<span>Movies</span>
					</div>
					<div>
						<span>5,000+</span>
						<span>Series</span>
					</div>
				</div>
			</div>
			<img src={HomeImage} alt='home image' />
		</div>
	);
}
