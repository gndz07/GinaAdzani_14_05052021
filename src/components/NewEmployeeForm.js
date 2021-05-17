import React from 'react';
import { NavLink } from 'react-router-dom';
import SelectForm from './SelectForm.js';
import DateSelector from './DateSelector.js';
import '../styles/new-employee-form.css';
import { departments } from '../constants/departments.js';
import { stateList } from '../constants/state.js';

export default function NewEmployeeForm() {
	const stateNames = [];
    stateList.map((state) => {
        stateNames.push(state.name);
    });

	return (
		<div className="container">
            <NavLink to='/employee-list'>View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateSelector />			

                <label htmlFor="start-date">Start Date</label>
                <DateSelector />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <SelectForm name="state" data={stateNames} />     

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