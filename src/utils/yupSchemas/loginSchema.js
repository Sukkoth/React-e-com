import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(32),
});

export default loginSchema;
