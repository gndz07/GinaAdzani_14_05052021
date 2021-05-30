import * as yup from "yup";

export const newEmployeeField = {
	first_name: "first_name",
	last_name: "last_name",
	date_of_birth: "date_of_birth",
	start_date: "start_date",
	street: "street",
	city: "city",
	state: "state",
	zip_code: "zip_code",
	department: "department"
};

export const newEmployeeSchema = yup.object().shape({
	first_name: yup.string().required("First name is required").min(2).max(30),
	last_name: yup.string().required("Last name is required").min(2).max(30),
	date_of_birth: yup.date().required("Date is required"),
	start_date: yup.date().required("Date is required"),
	street: yup.string().required("First name is required").min(2).max(30),
	city: yup.string().required("First name is required").min(2).max(30),
	state: yup.string().required("First name is required").min(2).max(30),
	zip_code: yup.number().required("Zip code is required"),
	department: yup.string().required("First name is required").min(2).max(30)
});

export const newEmployeeDefaultValues = {
	first_name: "",
	last_name: "",
	date_of_birth: "",
	start_date: "",
	street: "",
	city: "",
	state: "",
	zip_code: "",
	department: ""
};