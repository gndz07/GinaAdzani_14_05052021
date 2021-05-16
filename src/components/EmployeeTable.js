import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

function createData(firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode) {
	return { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode };
}

const rows = [
	createData('John', 'Doe', 12, 'Sales', 13, 'Street', 'City', 'State', 76540)
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if(order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const cellsHeader = [
	{ id: 'firstName', numeric: false, disablePadding: true, label: 'First Name'}, 
	{ id: 'lastName', numeric: false, disablePadding: true, label: 'Last Name'}, 
	{ id: 'startDate', numeric: true, disablePadding: true, label: 'Start Date'}, 
	{ id: 'department', numeric: false, disablePadding: true, label: 'Department'}, 
	{ id: 'dateOfBirth', numeric: true, disablePadding: true, label: 'Date of Birth'}, 
	{ id: 'street', numeric: false, disablePadding: true, label: 'Street'}, 
	{ id: 'city', numeric: false, disablePadding: true, label: 'City'}, 
	{ id: 'state', numeric: false, disablePadding: true, label: 'State'}, 
	{ id: 'zipCode', numeric: true, disablePadding: true, label: 'Zip Code'}
];

function EnhancedTableHead(props) {
	const { classes, order, orderBy, rowCount, onRequestSort } = props;
	const createSortHandler = (property) => (e) => {
		onRequestSort(e, property);
	};

	return (
		<TableHead>
			<TableRow>
				{cellsHeader.map((cellHead) => (
					<TableCell 
						key={cellHead.id} 
						align= 'left' 
						padding= 'default' 
						sortDirection={orderBy === cellHead.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === cellHead.id} 
							direction={orderBy === cellHead.id ? order : 'asc'} 
							onClick={createSortHandler(cellHead.id)} 
						>
							{cellHead.label}
							{orderBy === cellHead.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
					))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '75%',
		margin: 'auto'
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 750
	},
	visuallyHidden:{
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1
	}
}));

export default function EmployeeTable() {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (e, property) =>{
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	}

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<TableContainer>
					<Table 
						className={classes.table} 
						aria-labelledby='tableTitle' 
						aria-label='employee table'
					>
						<EnhancedTableHead
							classes={classes} 
							order={order} 
							orderBy={orderBy} 
							onRequestSort={handleRequestSort} 
							rowCount={rows.length} 
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<TableRow key={row.name}>
											<TableCell>{row.firstName}</TableCell>
											<TableCell>{row.lastName}</TableCell>
											<TableCell>{row.startDate}</TableCell>
											<TableCell>{row.department}</TableCell>
											<TableCell>{row.dateOfBirth}</TableCell>
											<TableCell>{row.street}</TableCell>
											<TableCell>{row.city}</TableCell>
											<TableCell>{row.state}</TableCell>
											<TableCell>{row.zipCode}</TableCell>
										</TableRow>
									);
									})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows}}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					labelRowsPerPage='Show entries' 
					rowsPerPageOptions={[10, 25, 50, 100]} 
					component='div' 
					count={rows.length} 
					rowsPerPage={rowsPerPage} 
					page={page} 
					onChangePage={handleChangePage} 
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}