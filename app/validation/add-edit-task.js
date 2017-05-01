const validate = values => {
	const errors = {};

	if (!values.taskName) {
		errors.taskName = 'Required field!';
	}

	if (!values.urgent && !values.important) {
		errors.urgent = 'Must select one!';
		errors.important = 'Must select one!';
	}

	return errors;
}

export default validate;
