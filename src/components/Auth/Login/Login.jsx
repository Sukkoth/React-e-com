import { useEffect, useMemo } from 'react';
import '../auth-page.styles.css';
import logo from '../../../assets/icon-21.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../features/Auth/authSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../../utils/yupSchemas/loginSchema';
import { RiseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm({ resolver: yupResolver(loginSchema) });

    const handleFormSubmit = (data) => {
        console.log('data', data);
        dispatch(
            login({ email: data.email.toLowerCase(), password: data.password })
        );
    };
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                    <h3>Login</h3>
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
                        <label htmlFor='email'>Email</label>
                        <input
                            className={formErrors?.email ? 'error-input' : ''}
                            id='email'
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                        />
                        {formErrors?.email && (
                            <p className='form-error'>
                                {formErrors?.email?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className={
                                formErrors?.password ? 'error-input' : ''
                            }
                            id='password'
                            type='password'
                            placeholder='Password'
                            {...register('password')}
                        />
                        {formErrors?.password && (
                            <p className='form-error'>
                                {formErrors?.password?.message}
                            </p>
                        )}
                    </div>
                    <button className='auth-submit'>
                        {isLoading ? (
                            <RiseLoader size={9} color='white' />
                        ) : (
                            'LOGIN'
                        )}
                    </button>
                    <p className='auth-alert'>
                        {"Don't have an account yet?  "}
                        <span className='action'>Register</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
