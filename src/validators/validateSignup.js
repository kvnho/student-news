export default function validateSignup(values) {
	let errors = {};

	// Name Errors
	if (!values.name) {
		errors.name = 'A username is required.';
	}

	// Email Errors
	if (!values.email) {
		errors.email = 'Your email is required.';
	}

	// Password Errors
	if (!values.password) {
		errors.password = 'A password is required.';
	} else if (values.password.length < 6) {
		errors.password = 'Your password must be at least 6 characters.';
	}

	return errors;
}
