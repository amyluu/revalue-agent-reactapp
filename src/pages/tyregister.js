import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class ThanksRegister extends React.Component {
	//constructor(props){
	//	super(props)
	//}

	redirect(e) {
		this.props.history.push('/')
	}

	componentDidMount(){
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(() => {
         	this.redirect()
            // Add logic for transition
         }, 5000)
    }

	render() {
		return (
			<div className="ThanksRegister col-centered centered">
				<span className="fa-stack fa-2x">
					<i className="fa fa-circle-thin fa-stack-2x"></i>
					<i className="fa fa-check fa-stack-1x"></i>
				</span>
				<h3>Registration successful!</h3>

				<br/>
				Thank you for registering with ReValue.<br/>
				You will be redirected to the login page shortly.
				<br/><br/>

				<Link to="/">Click here if you are not redirected in 5 seconds.</Link>
			</div>
		)
	}

	componentWillUnmount() {
         clearTimeout(this.timeoutHandle); 
         // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
}

export default withRouter(ThanksRegister)