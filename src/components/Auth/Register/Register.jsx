import { useMemo, useEffect } from 'react';
import '../auth-page.styles.css';
import logo from '../../../assets/icon-21.png';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registrationSchema from '../../../utils/yupSchemas/registrationSchema';
import { registerUser, resetErrors } from '../../../features/Auth/authSlice';
import { RiseLoader } from 'react-spinners';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        error: apiError,
        isLoading,
        auth,
    } = useSelector((state) => state.auth);
    const token = useMemo(() => auth?.token, [auth.token]);
    useEffect(() => {
        token && navigate('/');
    }, [token, navigate]);

    useEffect(() => {
        dispatch(resetErrors());
    }, [dispatch]);

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm({ resolver: yupResolver(registrationSchema) });

    const handleFormSubmit = (data) => {
        dispatch(registerUser(data));
    };
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                    <h3>Register</h3>
                </div>
                <form
                    className='form-container'
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    {apiError?.message && (
                        <div className='error-alert'>
                            <p>{apiError?.message || 'Error'} </p>
                        </div>
                    )}
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            type='text'
                            placeholder='First name'
                            {...register('firstName')}
                        />

                        {formErrors?.firstName && (
                            <p className='form-error'>
                                {formErrors?.firstName?.message}
                            </p>
                        )}
                        {apiError?.details?.firstName && (
                            <p className='form-error'>
                                {apiError?.details?.firstName?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            type='text'
                            placeholder='last name'
                            {...register('lastName')}
                        />

                        {formErrors?.lastName && (
                            <p className='form-error'>
                                {formErrors?.lastName?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='text'
                            placeholder='Phone'
                            {...register('phone')}
                        />

                        {formErrors?.phone && (
                            <p className='form-error'>
                                {formErrors?.phone?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            placeholder='Email'
                            id='email'
                            {...register('email')}
                        />

                        {formErrors?.email && (
                            <p className='form-error'>
                                {formErrors?.email?.message}
                            </p>
                        )}
                        {apiError?.details?.email && (
                            <p className='form-error'>
                                {apiError?.details?.email?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            placeholder='Password'
                            id='password'
                            {...register('password')}
                        />

                        {formErrors?.password && (
                            <p className='form-error'>
                                {formErrors?.password?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            placeholder=' Confirm Password'
                            id='confirmPassword'
                            {...register('confirmPassword')}
                        />

                        {formErrors?.confirmPassword && (
                            <p className='form-error'>
                                {formErrors?.confirmPassword?.message}
                            </p>
                        )}
                        {apiError?.details?.confirmPassword && (
                            <p className='form-error'>
                                {apiError?.details?.confirmPassword?.message}
                            </p>
                        )}
                    </div>
                    <button className='auth-submit' type='submit'>
                        {isLoading ? (
                            <RiseLoader size={9} color='white' />
                        ) : (
                            'REGISTER'
                        )}
                    </button>
                    <p className='auth-alert'>
                        Already have an account?{' '}
                        <Link to={'/login'}>
                            <span className='action'>Login</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
