import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import classNames from 'classnames'
import validator from 'validator'
import history from '../history.js'
import axios from 'axios'

class Login extends Component {
	  constructor(props) {
			super(props)
			this.handleClick = this.handleClick.bind(this)
			this.state = {
				email: {value: '', isValid: true, message: ''},
				password: {value: '', isValid: true, message: ''}
			};
	  }


		AxiosPost2() {
			// axios.post('http://54.149.159.111/login', {
			axios.post('http://localhost:5000/login', {
				email: this.state.email.value,
				password: this.state.password.value
			})
			.then(function (response) {
				const cookies = new Cookies()
				cookies.set('AT', response.headers.at, {path: '/'})
				// cookies.set('AT', self.state.authToken, {path: '/'})
				// console.log(cookies.get('AT'))
				// self.setState({authToken: response.headers.at})
				// this.setState({authToken: response.headers.at})
				//console.log(results.data);
				//console.log(results.headers.at);
				//console.log(this.state.authToken)
				// if (response.status === 404) { 
				// 	this.handle404()
				// }
			})
			.catch(function (error) {
				// if(error.status === 404) { this.handle404() }
    			// console.log(error)
 			})
		}

		handle404(){
			this.props.history.push('/');
		}

	  handleClick(e) {
		  this.props.history.push('/createwidget')
		}

	  onChange = (e) => {
			let state = this.state;
			state[e.target.name].value = e.target.value;

			this.setState(state);
	  }

	  onSubmit = (e) => {
			e.preventDefault();
			// const cookies = new Cookies()
			// 	cookies.set('AT', this.state.authToken, {path: '/'})
			// 	console.log(cookies.get('AT'))
			
			this.resetValidationStates(); //reset states before the validation procedure is run.
			if (this.formIsValid()) { //run the validation, and if it's good move on.
				//form processing here....
				this.AxiosPost2()
				//this.LoginPost()
				this.handleClick()
				}
	  }

	  formIsValid = () => {
		let state = this.state;

		if (!validator.isEmail(state.email.value)) {
				  state.email.isValid = false;
				  state.email.message = 'Invalid email address';
		
				  this.setState(state);
				  return false;
				}

		//additional validation checks here

		return true;
	  }

		resetValidationStates = () => {
			let state = this.state
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
		let {email, password} = this.state;
		/*
		Each of the group classes below will include the 'form-group' class, and will only
		include the 'has-error' class if the isValid value is false.
		*/
		let emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
		let passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});

		return (
		<div className="Login">
		   <div className="row">
		   	<div className="col-sm-8 col-centered">
					<form  onSubmit={this.onSubmit}>

						<div className={emailGroupClass}>
							<div className="input-group">
							  <span className="input-group-addon"><i className="fa fa-user" /></span>
								<input type="text" name="email" className="form-control"
									required maxLength="100"
								  placeholder="Email address" value={email.value} onChange={this.onChange} autoFocus />
						  </div>
						  <span className="help-block">{email.message}</span>
						</div>

					  <div className={passwordGroupClass}>
					  	<div className="input-group">
								<span className="input-group-addon"><i className="fa fa-lock" /></span>
								<input type="password" name="password" className="form-control"
							  placeholder="Password" value={password.value} onChange={this.onChange} 
							  required minLength="1" maxLength="30" />
							</div>
							<span className="help-block">{password.message}</span>
					  </div>
					  	<button  className="btn btn-block btn-login" type="submit">LOGIN</button>
					  	
					</form>
				</div>
			</div>

			<div className="row row-footer">
				<div className="btn-group btn-group-justified" role="group">
					<div className="btn-group" role="group">
						<Link to="/forgotpassword">
							<button 
								onClick={() => history.push('/forgotpassword')} 
								type="button" className="btn" id="btn-left">
									<i className="fa fa-question fa-fw" /> 
									Forgot Password
							</button>
						</Link>
					</div>
					<div className="btn-group" role="group">
						<Link to="/register">
							<button onClick={() => history.push('/register')} 
								type="button" className="btn" id="btn-right">
								<i className="fa fa-pencil fa-fw" /> 
								Register
							</button>
						</Link>
					</div>
				</div>
	  	</div>

		</div>
		);
	  }
	};

	export default withRouter(Login)
