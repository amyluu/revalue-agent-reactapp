import React, { Component } from 'react';
import logoImage from '../white-logo.png';
/*import './login.css';*/
import { Link } from 'react-router-dom';

import Login from './login.js';
import Register2 from './register2.js';

export default React.createClass({
	render() {
		return(
			<div className="Login">
				{/*start of smaller field area*/}
				<div className="row">
					<div className="col-sm-8 col-centered">
						<form>
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="email" className="form-control" placeholder="Email address" />
							</div><br />
							
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-unlock-alt" /></span>
								<input type="password" className="form-control" placeholder="Password" />
							</div><br />
							
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-lock" /></span>
								<input type="password" className="form-control" placeholder="Confirm password" />
							</div><br />
							<Link to="/register2">
								<button type="submit" className="btn btn-block btn-login">Continue Registration</button>
							</Link>
						</form>
					</div>
				</div>

				<br />

				<div className="row row-footer">
					<div className="btn-group btn-group-justified" role="group">
						<div className="btn-group" role="group">
							<Link to="/">
								<button type="button" className="btn" id="btn-left">
									<i className="fa fa-star fa-fw" /> Login
								</button>
							</Link>
						</div>
						<div className="btn-group" role="group">
							<Link to="#previouspage">
								<button type="button" className="btn" id="btn-right">
									<i className="fa fa-arrow-left fa-fw" /> Previous Page
								</button>
							</Link>
						</div>
					</div>
				</div>

			</div>
		)
	}
})