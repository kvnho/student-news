export default function validatePasswordReset(values) {
	let errors = {};

	// Email Errors
	if (!values.email) {
		errors.email = 'Your email is required.';
	}

	return errors;
}
