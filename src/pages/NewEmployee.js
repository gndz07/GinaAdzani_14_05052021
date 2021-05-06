import React from 'react';
import PageTitle from '../components/PageTitle.js';
import NewEmployeeForm from '../components/NewEmployeeForm.js';

export default class NewEmployee extends React.Component {
	render() {
		return (
			<main>
				<PageTitle title="HRnet" />
				<NewEmployeeForm />
			</main>
		)
	}
}