import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" name="email" placeholder='email' required />
                <br />
                <input type="password" name="password" placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Alredy have an account ?<Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;