import React from 'react'
import { Link } from 'react-router-dom'
import history from '../history.js'

class Register extends React.Component{

	
	render() {
		return (
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
								<button onClick={() => history.push('/')} type="button" className="btn" id="btn-left">
									<i className="fa fa-star fa-fw" /> Login
								</button>
							</Link>
						</div>
						<div className="btn-group" role="group">
							<button onClick={history.goBack} type="button" className="btn" id="btn-right">
								<i className="fa fa-arrow-left fa-fw" /> Previous Page
							</button>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default Register