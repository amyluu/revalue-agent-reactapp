import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//import validator from 'validator'
import history from '../history.js'

class PwRecovery extends Component {
	   constructor() {
		super()
		this.handleClick = this.handleClick.bind(this) //Click for onSubmit button
		this.state = {
		  password: {value: '', isValid: true, message: ''},
		  confirmPassword: {value: '', isValid: true, message: ''}
		};
	  }

	   handleClick(e) {
		  //e.preventDefault()
		  this.props.history.push('/register2')
		}

	   onChange = (e) => {
			let state = this.state;
			state[e.target.name].value = e.target.value;

			this.setState(state);
	   }

	   onSubmit = (e) => {
			e.preventDefault();
			this.resetValidationStates(); //reset states before the validation procedure is run.
			if (this.formIsValid()) { //run the validation, and if it's good move on.
			  //form processing here....
				this.handleClick()
				}
	   }

	   formIsValid = () => {
			let state = this.state;

			if (state.password.value !== state.confirmPassword.value) {
				state.password.isValid = false
				state.confirmPassword.isValid = false
				state.confirmPassword.message = 'Passwords do not match'

				this.setState(state)
				return false
			}

			//additional validation checks here

			return true;
		  }

		resetValidationStates = () => {
			let state = this.state;
			// eslint-disable-next-line
			Object.keys(state).map(key => {
		  if (state[key].hasOwnProperty('isValid')) {
			state[key].isValid = true;
			state[key].message = '';
			  	}
				}
			)
		return this.setState(state);
	  }

	   render() {
		let {password, confirmPassword} = this.state;
		/*
		Each of the group classes below will include the 'form-group' class, and will only
		include the 'has-error' class if the isValid value is false.
		*/
		let passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});
		let confirmGroupClass = classNames('form-group', {'has-error': !confirmPassword.isValid});

		return (
		<div className="Login">
		   <div className="row">
			<div className="col-sm-8 col-centered">
					<h4><b>Reset your password</b></h4>
					<p>You have requested to reset your password for <b>john@example.com</b>.</p>
					<form  onSubmit={this.onSubmit}>

					  <div className={passwordGroupClass}>
						<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-unlock-alt" /></span>	
								<input type="password" name="password" className="form-control"
							  placeholder="New password" value={password.value} onChange={this.onChange} 
							  required minLength="1" maxLength="30" />
							</div>
							<span className="help-block">{password.message}</span>
					  </div>

					  <div className={confirmGroupClass}>
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-lock" /></span>
								<input type="password" name="confirmPassword" className="form-control"
								required minLength="1" maxLength="30"
								placeholder="Retype new password" value={confirmPassword.value} onChange={this.onChange} />
							</div>
						<span className="help-block">{confirmPassword.message}</span>
					  </div>
						<button className="btn btn-block btn-login" type="submit">Change Password</button>
					</form>
				</div>
			</div>

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
					<Link to="/">
						<button onClick={() => history.push('/register')} type="button" className="btn" id="btn-right">
							<i className="fa fa-pencil fa-fw" /> Register</button>
					</Link>
					</div>
				</div>
			</div>

		</div>
		);
	  }
	};

	export default PwRecovery
