import React, { Component } from 'react';
import logoImage from './white-logo.png';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Login from './pages/login.js';
import ForgotPassword from './pages/forgotpassword.js';
import Register from './pages/register.js';
import Register2 from './pages/register2.js';

export default React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5 col-centered larger-box centered">
                <div className="white-logo-div">
                  <img className="white-logo" src={logoImage} />
                </div>
                <div className="arrow-down col-centered" />
                <br />

                <div className="App-content">
                  <div className="Login">
                    <Route exact path="/" component={Login} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/register" component={Register} />
                    <Route path="/register2" component={Register2} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
})
