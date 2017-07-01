const validate = (values) => {
    const errors = {};

    if (!values.taskName) {
        errors.taskName = 'The task name is required.';
    }

    if (values.descriptors.length < 1) {
        errors.descriptors = 'If the task is not urgent or important, it\'s not worth doing.';
    }

    return errors;
};

export default validate;
