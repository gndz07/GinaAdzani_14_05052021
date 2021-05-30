export const addEmployee = (employeeData) => async dispatch => {
	dispatch({
		type: "ADD_EMPLOYEE",
		payload: employeeData
		}
	)
};