import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound';
import Serie from './pages/Serie/Serie';
import Series from './pages/Series/Series';
import Wrapper from './pages/Wrapper';

export default function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route element={<Wrapper />}>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/series' element={<Series />} />
				<Route path='/movies/:title' element={<Movie />} />
				<Route path='/series/:title' element={<Serie />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
