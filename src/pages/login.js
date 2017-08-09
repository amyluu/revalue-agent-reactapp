import React, { Component } from 'react';
import logoImage from '../white-logo.png';
import { Link } from 'react-router-dom';

import ForgotPassword from './forgotpassword.js';
import Register from './register.js';

export default React.createClass({
	render() {
		return (
			<div className="Login">

			  {/*start of smaller field area*/}
				<div className="row">
					<div className="col-sm-8 col-centered">
						<form>
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" className="form-control" placeholder="Username" />
							</div>
							<br />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-lock" /></span>
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<br />
							<button type="submit" className="btn btn-block btn-login">LOGIN</button>
						</form>
					</div>
				</div>

			  <br />

			  	<div className="row row-footer">
					<div className="btn-group btn-group-justified" role="group">
						<div className="btn-group" role="group">
							<Link to="/forgotpassword">
								<button type="button" className="btn" id="btn-left">
									<i className="fa fa-question" /> Forgot Password
								</button>
							</Link>
						</div>
						<div className="btn-group" role="group">
							<Link to="/register">
								<button type="button" className="btn" id="btn-right">
									<i className="fa fa-pencil" /> Register
								</button>
							</Link>
						</div>
					</div>
			  	</div>
			</div>
		);
	}
})