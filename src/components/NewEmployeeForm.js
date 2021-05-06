import React from 'react';
import SelectForm from './SelectForm.js';
import '../styles/new-employee-form.css';

export default class NewEmployeeForm extends React.Component {
	render() {
		const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

		return (
			<div className="container">
	            <a href="employee-list.html">View Current Employees</a>
	            <h2>Create Employee</h2>
	            <form action="#" id="create-employee">
	                <label htmlFor="first-name">First Name</label>
	                <input type="text" id="first-name" />

	                <label htmlFor="last-name">Last Name</label>
	                <input type="text" id="last-name" />

	                <label htmlFor="date-of-birth">Date of Birth</label>
	                <input id="date-of-birth" type="text" />			

	                <label htmlFor="start-date">Start Date</label>
	                <input id="start-date" type="text" />

	                <fieldset className="address">
	                    <legend>Address</legend>

	                    <label htmlFor="street">Street</label>
	                    <input id="street" type="text" />

	                    <label htmlFor="city">City</label>
	                    <input id="city" type="text" />

	                    <label htmlFor="state">State</label>
	                    <select name="state" id="state"></select>     

	                    <label htmlFor="zip-code">Zip Code</label>
	                    <input id="zip-code" type="number" />
	                </fieldset>

	                <label htmlFor="department">Department</label>
	                <SelectForm name="department" data={departments} />
	            </form>

	            <button>Save</button>
	        </div>

		)
	}
}