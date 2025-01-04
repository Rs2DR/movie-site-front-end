import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PaginationProps {
	count: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CustomPagination = styled(Pagination)(() => ({
	'& .MuiPaginationItem-root': {
		color: 'white',
		border: '1px solid white',
		fontSize: '1.25rem',
		padding: '10px',
	},
	'& .MuiPaginationItem-root.Mui-selected': {
		backgroundColor: 'white',
		color: '#000',
	},
	'& .MuiPaginationItem-root:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
	},
	'& .MuiPaginationItem-ellipsis': {
		border: 'none',
		color: 'white',
		fontSize: '1.25rem',
		padding: 0,
	},
}));

export default function MuiPagination({
	count,
	currentPage,
	setCurrentPage,
}: PaginationProps) {
	const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
		setCurrentPage(page);
	};

	return (
		<CustomPagination
			count={count}
			page={currentPage}
			onChange={handleChange}
			siblingCount={3}
			variant='outlined'
			shape='rounded'
			size='large'
			color='primary'
		/>
	);
}
