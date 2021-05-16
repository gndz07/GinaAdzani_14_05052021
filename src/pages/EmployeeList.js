import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle.js';
import EmployeeTable from '../components/EmployeeTable.js';
import '../styles/employee-list.css';

export default function EmployeeList() {
	return (
		<div>
			<PageTitle title="Current Employees" />
			<EmployeeTable />
			<NavLink to='/' className="link-menu">Home</NavLink>
		</div>
	)
}