import { useState } from 'react';

import './auth.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [text, setText] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setText({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setText({ [name]: value });
  };

  return (
    <section id='auth-section' className='util-mt-3'>
      <div className='util-container'>
        <div className='auth-header'>
          <h2>Login</h2>
          <div className='space'></div>
          <Link to='/register'>
            <h2 className='inactive'>Register</h2>
          </Link>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='util-mt-3'>
              Email Address *
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={text.email}
              onChange={handleChange}
              required
            />
            <label htmlFor='password' className='util-mt-3'>
              Password *
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={text.password}
              onChange={handleChange}
              required
            />
            <div className='login-wrapper util-mt-4'>
              <button type='submit'>Log In</button>
              <Link to='/forgotpassword'>Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
