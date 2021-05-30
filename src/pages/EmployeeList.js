import { NavLink } from 'react-router-dom';
import EmployeeDataTable from '../components/EmployeeDataTable.js';
import '../styles/employee-list.css';

export default function EmployeeList() {
	return (
		<div className="list-container">
			<EmployeeDataTable />
			<NavLink to='/' className="link-menu">Home</NavLink>
		</div>
	)
}