import React from 'react';
import { Link } from 'react-router-dom';

class Register2 extends React.Component{
	render() {
		return (
			<div className="Login">

			{/*start of smaller field area*/}
      		<div className="row">
					<div className="col-sm-8 col-centered">
						<form>
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" required
									className="form-control" 
									minLength="2"
									maxLength="50"
									placeholder="First name" 
								/>
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" required 
									className="form-control" 
									minLength="2"
									maxLength="50"
									placeholder="Last name" 
								/>
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-phone" /></span>
								<input type="tel" 
									className="form-control" 
									maxLength="20"
									pattern="^\d{3}-\d{3}-\d{4}$"
									title="123-456-7890"
									placeholder="Phone (123-456-7890)" 
								/>
							</div>
							<p className="small-line-break" />
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-window-maximize" /></span>
								<input 
									type="url" 
									className="form-control"
									title="Include http(s)://" 
									placeholder="Domain name (http(s)://domain.com)" 
								/>
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
}

export default Register2