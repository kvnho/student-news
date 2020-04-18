export default function validateCreateLink(values) {
	let errors = {};

	// Description Errors
	if (!values.description) {
		errors.description = 'A description is required.';
	}

	// URL Errors
	if (!values.url) {
		errors.url = 'A URL is required.';
	}

	return errors;
}
