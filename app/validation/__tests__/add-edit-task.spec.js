import validate from '../add-edit-task';

describe('Validate Function', () => {
    let defaultValues;

    beforeEach(() => {
        defaultValues = {
            taskName: '',
            descriptors: []
        };
    });

    it('should return an error if the taskName is falsy', () => {
        const result = validate(defaultValues);
        expect(result.taskName).toBeDefined();
    });

    it('should not return an error if the taskName is defined', () => {
        const result = validate({
            ...defaultValues,
            taskName: 'Some string'
        });
        expect(result.taskName).not.toBeDefined();
    });

    it('should return an error if the descriptors array is empty', () => {
        const result = validate(defaultValues);
        expect(result.descriptors).toBeDefined();
    });

    it('should not return an error if the descriptors array contains at least one value', () => {
        const result = validate({
            ...defaultValues,
            descriptors: ['Descriptor01']
        });
        expect(result.descriptors).not.toBeDefined();
    });
});
