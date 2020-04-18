import React from 'react';
import { toast } from '../helpers/toast';

function useForm(initalState, validate, action) {
	const [values, setValues] = React.useState(initalState);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length == 0;
			if (noErrors) {
				action();
				setValues(initalState);
				setSubmitting(false);
			} else {
				toast(Object.values(errors).join(''));
				setSubmitting(false);
			}
		}
	}, [errors]);

	function handleChange(event) {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	function handleSubmit() {
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
	}

	return {
		handleSubmit,
		handleChange,
		values,
		setValues,
		isSubmitting,
	};
}

export default useForm;
