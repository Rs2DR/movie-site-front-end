import LinkButton from '../components/UI/LinkButton/LinkButton';

export default function NotFound() {
	return (
		<main
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 style={{ fontWeight: '700' }}>404</h1>
			<span style={{ color: 'white', marginBottom: '2rem' }}>
				There is no such page
			</span>
			<LinkButton link='/'>Go to the main page</LinkButton>
		</main>
	);
}
