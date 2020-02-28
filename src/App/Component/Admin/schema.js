export default {
    username: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    },
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true
    }
};