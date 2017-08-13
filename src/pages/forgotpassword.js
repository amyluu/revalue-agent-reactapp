import React from 'react'
import { Link } from 'react-router-dom'

class Register2 extends React.Component{
	render() {
		return(
			<div className="Login">

            {/*start of smaller field area*/}
		      <div className="row">
		         <div className="col-sm-8 col-centered">
		            <form>
		              <div className="input-group">
		                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
		                <input type="email" className="form-control" placeholder="Email address" />
		              </div>
		              <br />
		              <button type="submit" className="btn btn-block btn-login">Retrieve Password</button>
		            </form>
		         </div>
		      </div>

		      <br />

		      <div className="row row-footer">
		         <div className="btn-group btn-group-justified" role="group">
		            <div className="btn-group" role="group">
		              	<Link to="/">
			               <button type="button" className="btn" id="btn-left">
			               	<i className="fa fa-star" /> Login
			               </button>
		              	</Link>
		            </div>
		            <div className="btn-group" role="group">
		              	<Link to="/register">
		               	<button type="button" className="btn" id="btn-right">
		                  	<i className="fa fa-pencil" /> Register
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
