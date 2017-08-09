import React, { Component } from 'react';
import logoImage from '../white-logo.png';
/*import './login.css';*/
import { Link } from 'react-router-dom';

import Login from './login.js';
import Register from './login.js';

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
								<input type="text" className="form-control" placeholder="First name" />
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" className="form-control" placeholder="Last name" />
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-phone" /></span>
								<input type="text" className="form-control" placeholder="Phone number" />
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-window-maximize" /></span>
								<input type="text" className="form-control" placeholder="Domain name" />
							</div>
							<p className="small-line-break" />
							<button type="submit" className="btn btn-block btn-login">Register</button>
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
							<Link to="/register">
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