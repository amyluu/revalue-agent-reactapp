import React from 'react'
import logoImage from '../white-logo.png'


const MainLayout = ({ children }) => (
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
							{children}
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
)

export default MainLayout