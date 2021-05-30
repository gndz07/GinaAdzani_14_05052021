import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import SelectForm from './SelectForm.js';
import DateSelector from './DateSelector.js';
import '../styles/new-employee-form.css';
import Actions from '../actions';
import { verifyNumber, verifyString, verifyDate } from '../libs/componentsUtils.js';
import { departments } from '../constants/departments.js';
import { stateList } from '../constants/state.js';

export default function NewEmployeeForm() {
	const stateNames = [];
    stateList.map((state) => {
        stateNames.push(state.name);
    });

    const dispatch = useDispatch()

    const [initialDob, setInitialDob] = useState(null);
    const [initialStartDate, setInitialStartDate] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const fillForm = (e, changeState) => {
        changeState(e.target.value);
    }

    const handleDateChange = (date, state, displayState) => {
        const dateString = date.toLocaleString('en-GB');
        const dateArray = dateString.split(",");
        displayState(date);
        state(dateArray[0].replaceAll("/", "-"));
    }

    //function to capitalize input
    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onSubmit = () => {
        dispatch(Actions.addEmployee({
            firstName: capitalize(firstName),
            lastName: capitalize(lastName),
            dob,
            startDate,
            street: capitalize(street),
            city: capitalize(city),
            stateName,
            zipCode,
            department
        }))
    }


	return (
		<div className="container">
            <NavLink to='/employee-list'>View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" id="first-name" onBlur={e => fillForm(e, setFirstName)}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" id="last-name" onBlur={e => fillForm(e, setLastName)}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateSelector name="date-of-birth" onChange={(date) => handleDateChange(date, setDob, setInitialDob)} selected={initialDob}/>			

                <label htmlFor="start-date">Start Date</label>
                <DateSelector name="start-date" onChange={(date) => handleDateChange(date, setStartDate, setInitialStartDate)} selected={initialStartDate} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" onBlur={e => fillForm(e, setStreet)}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" onBlur={e => fillForm(e, setCity)}/>

                    <label htmlFor="state">State</label>
                    <SelectForm name="state" data={stateNames} name="state" value={stateName} onChange={e => fillForm(e, setStateName)}/>     

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zip-code" onBlur={e => fillForm(e, setZipCode)}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <SelectForm name="department" data={departments} name="department" value={department} onChange={e => fillForm(e, setDepartment)}/>
            </form>

            <button onClick={onSubmit}>Save</button>
        </div>
	)
}