import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';

export default function Wrapper() {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
		>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
