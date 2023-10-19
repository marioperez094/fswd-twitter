// home.jsx
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../../components/navbar/navbar'
import Slider from '../../components/slider/slider';
import Signup from '../../components/signup/signup';


import {logInUser, signUpUser} from '../../utils/requests';
import { handleErrors } from '../../utils/fetchHelper';

import './login.scss'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '', 
      email: '',
      backgroundCount: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeBackgroundCount = this.changeBackgroundCount.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
  }

  componentDidMount() {
    let backgroundTimer = setInterval(() => {this.changeBackgroundCount()}, 10000)
  }

  componentWillUnmount() {
    clearInterval(backgroundTimer);
  }

  changeBackgroundCount() {
    const backgroundCount = (this.state.backgroundCount + 1) % 2;
    this.setState({backgroundCount}) 
  }

  handleInputChange(event) {
    const inputType = event.target.name;
    const inputValue = event.target.value
    this.setState({...this.state, [inputType]: inputValue});
  }

  loginSubmit(event) {
    event.preventDefault();
    const {password, username} = this.state;
    if (!username || !password) {
      return;
    }

    logInUser(username, password, function(res) {
      console.log(res)
      if(res.success) { 
        window.location.assign('/feed');
      };
    });
  }

  signupSubmit(event) {
    event.preventDefault();
    const {password, username, email} = this.state;
    if (!username || !password || !email) {
      return;
    }

    signUpUser(username, password, email, function (res) {
      console.log(res)
      if (res.user) {
        logInUser(username, password, function (res) {
          console.log(res)
          if (res.success) {
            window.location.assign('/feed');
          };
        });
      };
    });
  }

  render() {
    const {backgroundCount} = this.state;
    

    return (
      <React.Fragment>
        <Slider
          backgroundCount={backgroundCount}
          key={backgroundCount}
        />
        <div className='login-content'>
          <Navbar />
          <Signup
            handleInputChange={this.handleInputChange}
            loginSubmit={this.loginSubmit}
            signupSubmit={this.signupSubmit}
          />
        </div>
      </React.Fragment>
    )
  };
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})