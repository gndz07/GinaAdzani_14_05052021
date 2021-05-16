import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewEmployee from '../pages/NewEmployee.js';
import EmployeeList from '../pages/EmployeeList.js';

export default function PageRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={NewEmployee} />
				<Route path='/employee-list' component={EmployeeList} />
			</Switch>
		</Router>
	)
}