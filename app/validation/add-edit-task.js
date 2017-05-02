const validate = values => {
	const errors = {};

	if (!values.taskName) {
		errors.taskName = 'Required field!';
	}

	if (values.descriptors.length < 1) {
		errors.descriptors = 'Must select one!';
	}

	return errors;
}

export default validate;
