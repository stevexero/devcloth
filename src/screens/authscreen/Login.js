import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase';

import './auth.scss';

const Login = () => {
  const [text, setText] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(text.email, text.password);
      setText({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setText({ ...text, [name]: value });
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
            <button type='submit' className='util-mt-4'>
              Log In
            </button>
            <button
              type='button'
              className='google-button util-mt-4'
              onClick={signInWithGoogle}
            >
              Log in with Google
            </button>
            <Link
              to='/forgotpassword'
              className='util-mt-3'
              style={{ textAlign: 'center' }}
            >
              Forgot Password?
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
