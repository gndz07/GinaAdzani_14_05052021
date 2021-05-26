import React, {useState} from 'react';
import PageTitle from '../components/PageTitle.js';
import NewEmployeeForm from '../components/NewEmployeeForm.js';
import { Modal } from 'modal-for-react';

export default function NewEmployee() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => isModalActive ? setModalActive(false) : setModalActive(true);
	return (
		<main>
			<PageTitle title="HRnet" />
			<NewEmployeeForm />
			<button onClick={handleClickModal}>Click me</button>
			<Modal 
				modalContent="test" 
				handleClick={handleClickModal} 
				isActive={isModalActive} 
			/>
		</main>
	)
}