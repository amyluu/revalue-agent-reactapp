import React from 'react'
import axios from 'axios'

class Button extends React.Component{
	

	AxiosGet(){
		axios.get('http://54.149.159.111/create/user')
		.then(function (response) {
		console.log('response', response.data)
		})
	}

	AxiosPostJim(){
		axios.post('http://54.149.159.111/world', { firstName: 'Marlon', lastName: 'Bernardes' })
		.then(function (response) {
		console.log('response', response.data);
		})
		.catch(function (error) {
		console.log(error);
		});
	}


	AxiosPostReqres(){
		axios.post('https://reqres.in/api/register', { email: 'amy@test.com', password: 'cool' })
		.then(function (response) {
		console.log('registration response', response.data);
		})
		.catch(function (error) {
		console.log(error);
		});
	}

	render(){
		return(
			<div>
				<button onClick={this.AxiosGet} type="submit" className="btn btn-block btn-login">
					hello get button
				</button>
				<button onClick={this.AxiosPostJim} type="submit" className="btn btn-block btn-login">
					world post button
				</button>
				<button onClick={this.AxiosPostReqres} type="submit" className="btn btn-block btn-login">
					post button to reques.in
				</button>
			</div>
		);
	}
}

export default Button
