import React from 'react';
import ReactDOM from 'react-dom';

import './signup.scss'

function Signup (props) {
  const {handleInputChange, loginSubmit, signupSubmit} = props;

  return (
    <div className='container-fluid' id='signup'>
      <div className='row signup-content'>
        <div className='col-5 offset-1'>
          <h1>Welcome to Twitter.</h1>
          <h5 className='mt-4'>Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</h5>
        </div>
        <div className='col-5'>
          <div id='login'>
            <form
              onSubmit={(event) => loginSubmit(event)}
              className='py-2 px-3 rounded bg-white'
            >
              <div className='form-group'>
                <input
                  className='form-control'
                  aria-describedby='userNameHelp'
                  placeholder='Username'
                  name='username'
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className='row mt-3'>
                <div className='form-group col-9'>
                  <input
                    type='password'
                    className='form-control'
                    id='loginPassword'
                    placeholder='Password'
                    name='password'
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <div className='form-group col-3 text-end'>
                  <button
                    type='submit'
                    className='btn btn-primary login-btn'
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='mt-2' id='signup'>
            <form
              onSubmit={(event) => signupSubmit(event)}
              className='py-2 px-3 rounded bg-white'
            >
              <p>
                <b>New to Twitter?</b>
                <span className='ms-2 signup-text'>Sign Up</span>
              </p>
              <div className='form-group'>
                <input
                  className='form-control'
                  aria-describedby='userNameHelp'
                  placeholder='Username'
                  name='username'
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className='form-group mt-3'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='Email'
                  name='email'
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className='form-group mt-3'>
                <input
                  type='password'
                  className='form-control'
                  id='signupPassword'
                  placeholder='Password'
                  name='password'
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-warning signup-btn mt-3'>
                  Sign up for Twitter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

/*class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '', 
      email: '',
    };
  }

  

  render () {
    const{handleInputChange, loginSubmit, signupSubmit} = this.props;

    return (
      <div className='container-fluid' id='signup'>
        <div className='row signup-content'>
          <div className='col-5 offset-1'>
            <h1>Welcome to Twitter.</h1>
            <h5 className='mt-4'>Connect with your friends — and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</h5>
          </div>
          <div className='col-5'>
            <div id='login'>
              <form
                onSubmit={(event) => loginSubmit(event)}
                className='py-2 px-3 rounded bg-white'
              >
                <div className='form-group'>
                  <input
                    className='form-control'
                    aria-describedby='userNameHelp'
                    placeholder='Username'
                    name='username'
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <div className='row mt-3'>
                  <div className='form-group col-9'>
                    <input
                      type='password'
                      className='form-control'
                      id='loginPassword'
                      placeholder='Password'
                      name='password'
                      onChange={(event) => handleInputChange(event)}
                    />
                  </div>
                  <div className='form-group col-3 text-end'>
                    <button
                      type='submit'
                      className='btn btn-primary login-btn'
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='mt-2' id='signup'>
              <form
                onSubmit={(event) => signupSubmit(event)} 
                className='py-2 px-3 rounded bg-white'
              >
                <p>
                  <b>New to Twitter?</b>
                  <span className='ms-2 signup-text'>Sign Up</span>
                </p>
                <div className='form-group'>
                  <input
                    className='form-control'
                    aria-describedby='userNameHelp'
                    placeholder='Username'
                    name='username'
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='inputEmail'
                    placeholder='Email'
                    name='email'
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='signupPassword'
                    placeholder='Password'
                    name='password'
                    onChange={(event) => handleInputChange(event)}
                  />
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='btn btn-warning signup-btn mt-3'>
                    Sign up for Twitter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}*/

export default Signup;