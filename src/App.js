import React from 'react'
import logoImage from './white-logo.png'
import './App.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import history from './history.js'

import MainLayout from './layouts/MainLayout'

import Login from './pages/login'
import ForgotPassword from './pages/forgotpassword'
import Register from './pages/register'
import Register2 from './pages/register2'
// import Test from './pages/test'
import PwRecovery from './pages/pwrecovery'
import ThanksRegister from './pages/tyregister'

class App extends React.Component{
	componentDidMount() {
		history.push('/')
	}

	render() {
		return(
			<BrowserRouter history={history}>
				<div> 
					<Switch>
						<Route exact path="/" render={() => <MainLayout><Login /></MainLayout>} />
						<Route path="/forgotpassword" render={() => <MainLayout><ForgotPassword /></MainLayout>} />
						<Route path="/register" render={() => <MainLayout><Register /></MainLayout>} />
						<Route path="/register2" render={() => <MainLayout><Register2 /></MainLayout>} />
						<Route path="/pwrecovery" render={() => <MainLayout><PwRecovery /></MainLayout>} />
						<Route path="/tyregister" render={() => <MainLayout><ThanksRegister /></MainLayout>} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}

/*
	render() {
		return(
			<BrowserRouter history={history}>
				<div className="App">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-5 col-centered larger-box centered">
								<div className="white-logo-div">
									<img className="white-logo" alt="ReValue logo" src={logoImage} />
								</div>
								<div className="arrow-down col-centered" />
								<br />

								<div className="App-content">
									<div className="Login">
										<Route exact path="/" component={Login} />
										<Route path="/forgotpassword" component={ForgotPassword} />
										<Route path="/register" component={Register} />
										<Route path="/register2" component={Register2} />
										<Route path="/pwrecovery" component={PwRecovery} />
										<Route path="/tyregister" component={ThanksRegister} />
										{/* <Route path="/test" component={Test} /> 
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	} 
*/

}

export default App
