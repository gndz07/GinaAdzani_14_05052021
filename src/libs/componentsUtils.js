export function verifyEmail(value) {
	const emailRex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRex.test(value);
}

export function verifyNumber(value) {
	const numberRex = new RegExp(/^\d*\.?\d*$/);
	return numberRex.test(value) && value.length >= 4;
}

export function verifyString(value) {
	const nameRex = /^[^\s][^\s]$/;
	return nameRex.test(value);
}

export function verifyDate(value) {
	const dateRex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
	return dateRex.test(value);
}