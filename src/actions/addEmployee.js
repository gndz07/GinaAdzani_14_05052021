export default const addEmployee = (employeeData) => async dispatch => {
	dispatch({
		type: "ADD_EMPLOYEE",
		payload: {
			firstName: employeeData.firstName,
			lastName: employeeData.lastName,
			dob: employeeData.dob,
			startDate: employeeData.startDate,
			street: employeeData.street,
			city: employeeData.city,
			state: employeeData.state,
			zipCode: employeeData.zipCode,
			department: employeeData.department
		}
	})
};