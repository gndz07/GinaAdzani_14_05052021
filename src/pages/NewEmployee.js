import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from '../components/PageTitle.js';
import NewEmployeeForm from '../components/NewEmployeeForm.js';
import { Modal } from 'modal-for-react';

export default function NewEmployee() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => {
		isModalActive ? setModalActive(false) : setModalActive(true)

	};
	return (
		<main>
			<PageTitle title="HRnet" />
			<NewEmployeeForm onSubmit={handleClickModal}/>
			<NavLink to='/employee-list' className="link-menu">View Current Employees</NavLink>
			<Modal 
				modalContent="New employee data added!" 
				handleClick={handleClickModal} 
				isActive={isModalActive} 
				refresh={true}
				backgroundStyle={{ width: "100vw", height: "100vw" }}
				contentStyle={{ marginTop: "40%" }}
			/>
		</main>
	)
}