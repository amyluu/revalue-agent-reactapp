import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import validator from 'validator'
import Cookies from 'universal-cookie'
import history from '../history.js'
import axios from 'axios'


class Register extends Component {
		constructor(props) {
			super(props)
			this.handleClick = this.handleClick.bind(this) //Click for onSubmit button
			this.handleClickBack = this.handleClickBack.bind(this) //Click for Previous Page button
			this.state = {
				email: {value: '', isValid: true, message: ''},
				password: {value: '', isValid: true, message: ''},
				confirmPassword: {value: '', isValid: true, message: ''}, 
			};
		}

		// CreateUserPost() {
		// // var myurl2 = "http://54.149.159.111/create/user";
		// var myurl2 = "http://localhost:5000/create/user";
		// 	var myReq2 = new XMLHttpRequest();
		// 	myReq2.onreadystatechange = function() {
		// 		if(myReq2.readyState === 4 && myReq2.status === 200) {
		// 			if (myReq2.withCredentials === true ) {
		// 			console.log(JSON.parse(myReq2.response));
		// 			} else {
		// 			console.log("doesnt work");
		// 			}
		// 	  };
		// 	 }
		// 	myReq2.open('POST', myurl2, true);
		// 	myReq2.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); 
		// 	myReq2.withCredentials = true;
		// 	myReq2.send(
		// 		JSON.stringify({
		// 			"email": this.state.email.value, 
		// 			"password": this.state.password.value
		// 		})
		// 	);
		// }
		CreateUserPost() {
			axios.post('http://localhost:5000/create/user', {
				email: this.state.email.value,
				password: this.state.password.value
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
		}

		componentDidMount(){
			this.props.history.goBack()
		}

	   handleClick(e) {
		  //e.preventDefault()
		  this.props.history.push('/register2')
		}

		handleClickBack(e) {
			e.preventDefault()
			this.props.history.goBack()
		}

	   onChange = (e) => {
			let state = this.state;
			state[e.target.name].value = e.target.value;

			this.setState(state);
	   }

	   onSubmit = (e) => {
			e.preventDefault();
			const cookies = new Cookies()
				cookies.set('email', this.state.email.value, {path: '/'})
				//console.log(cookies.getAll())
			this.resetValidationStates(); //reset states before the validation procedure is run.
			if (this.formIsValid()) { //run the validation, and if it's good move on.
			  //form processing here...
				this.CreateUserPost()
				this.handleClick()
				}
	   }

	   formIsValid = () => {
			let state = this.state;

			if (!validator.isEmail(state.email.value)) {
			  state.email.isValid = false;
			  state.email.message = 'Not a valid email address';

			  this.setState(state);
			  return false;
			}

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
		})
		return this.setState(state);
	  }

	   render() {
		let {email, password, confirmPassword} = this.state;
		/*
		Each of the group classes below will include the 'form-group' class, and will only
		include the 'has-error' class if the isValid value is false.
		*/
		let emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
		let passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});
		let confirmGroupClass = classNames('form-group', {'has-error': !confirmPassword.isValid});

		return (
		<div className="Login">
		   <div className="row">
			<div className="col-sm-8 col-centered">
					<form  onSubmit={this.onSubmit}>

						<div className={emailGroupClass}>
							<div className="input-group">
							  <span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" name="email" className="form-control" required
								  placeholder="Email address" value={email.value} onChange={this.onChange} autoFocus />
						  </div>
						  <span className="help-block">{email.message}</span>
						</div>

					  <div className={passwordGroupClass}>
						<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-unlock-alt" /></span>	
								<input type="password" name="password" className="form-control"
							  placeholder="Password" value={password.value} onChange={this.onChange} 
							  required minLength="1" maxLength="30" />
							</div>
							<span className="help-block">{password.message}</span>
					  </div>

					  <div className={confirmGroupClass}>
							<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-lock" /></span>
								<input type="password" name="confirmPassword" className="form-control"
								required minLength="1" maxLength="30"
								placeholder="Confirm Password" value={confirmPassword.value} onChange={this.onChange} />
							</div>
						<span className="help-block">{confirmPassword.message}</span>
					  </div>
						<button className="btn btn-block btn-login" type="submit">
						Continue Registration</button>
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
						<button onClick={this.handleClickBack} type="button" className="btn" id="btn-right">
							<i className="fa fa-arrow-left fa-fw" /> Previous Page
						</button>
					</div>
				</div>
			</div>
		</div>
		);
	  }
	};

	export default withRouter(Register)
