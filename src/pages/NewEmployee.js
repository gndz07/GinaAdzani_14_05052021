import React from 'react';
import PageTitle from '../components/PageTitle.js';
import NewEmployeeForm from '../components/NewEmployeeForm.js';

export default function NewEmployee() {
	return (
		<main>
			<PageTitle title="HRnet" />
			<NewEmployeeForm />
		</main>
	)
}