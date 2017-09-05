import React from 'react'
import logoImage from '../white-logo.png'


const AgentLayout = ({ children }) => (
	<div className="AgentLayout">
		<div className="container-fluid AgentLayout">
			<div className="row-fluid">
				{/* <div className="col-sm-5 col-centered larger-box centered">*/}
					<div className="white-logo-div">
						<img className="white-logo" alt="ReValue logo" src={logoImage} />
					</div>
					<br />

					<div className="App-content">
						<div className="AgentDiv">
							{children}
						</div>
					</div>

				{/* </div> */}
			</div>
		</div>
	</div>
)

export default AgentLayout