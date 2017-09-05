import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { DropdownButton, MenuItem, Button, Modal } from 'react-bootstrap'
import bannerPreview from '../ModalBannerPreview.png'
import axios from 'axios'
import Cookies from 'universal-cookie'

class CreateWidget extends React.Component {

	componentDidMount(){
		document.body.style.backgroundColor = "white"// Set the style
		//document.body.className="body-component-a" // Or set the class
	}

	constructor() {
		super()
		const cookies = new Cookies()
			var authToken = cookies.get('AT')
			console.log(authToken)
		this.handleClick = this.handleClick.bind(this)
		this.open = this.open.bind(this)
    	this.close = this.close.bind(this)
		this.state = { showModal: false };
	}

	AxiosGet() {
		axios.get('http://54.149.159.111/user/widget')
		
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	/*WidgetGet() {
		var myurl5 = "http://54.149.159.111/user/widget";
		var myReq5 = new XMLHttpRequest();
		myReq5.onreadystatechange = function() {
		  if(myReq5.readyState === 4 && myReq5.status === 200) {
		        console.log(JSON.parse(myReq5.response));
		  };
		}
		myReq5.open('GET', myurl5, true);
		myReq5.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		myReq5.withCredentials = true;
		//btn5.addEventListener('click', function() {
		  //this.style.display = 'none';
		myReq5.setRequestHeader("AT", myReq4.getResponseHeader("AT"));
		myReq5.send();
		});
	}*/



	render() {
		return(
			<div className="container-fluid">
				<div className="row">
					<p>Widget successfully created.</p>
				</div>
				<div className="row">
					<p className="green-box"><span className="green-icon fa fa-check-circle-o fa-fw fa-2x" />Widget code</p>
				</div>
				<div className="row">
					<p>You can paste thise code onto any site that complies with our program policies.</p>
				</div>
			<br />
				<div className="row">
					<div className="col-md-2">
						<p className="p-col">Widget size</p>
					</div>
					<div className="col-md-3">
						{/*Dropdown menu*/}
						<DropdownButton bsStyle="Default" title="Small (250x250)" id="dropdown-basic-default">
							<MenuItem eventKey="1">Medium (350x350)</MenuItem>
							<MenuItem eventKey="2">Large (450x450)</MenuItem>
						</DropdownButton>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-2">
						<p className="p-col">Widget code</p>
					</div>
					<div className="col-sm-10">
					{/*Widget code*/}
						<textarea rows={8} cols={70} className="textarea" defaultValue={"widget code here"} /><br />
						For more help with implementing the code, please see our Code Implementation Guide.<br />
						Widget may take up to two hours to appear on site.
					</div>
				</div>

				<div className="row">
					<div className="col-sm-2">
						<p className="p-col">Preview</p>
					</div>
					<div className="col-sm-10">
						<p>Widget preview here</p>
						<p><a href="#">See example of placement.</a></p>

						<Button bsStyle="Default" onClick={this.open}>Launch demo modal</Button>

						<Modal show={this.state.showModal} onHide={this.close}>
							<Modal.Header closeButton>
								<Modal.Title>Modal heading</Modal.Title>
	         			</Modal.Header>
							<Modal.Body>
								<img className="banner-preview" alt="Banner preview" src={bannerPreview} />
							</Modal.Body>
							<Modal.Footer>
								Banner preview
							</Modal.Footer>
						</Modal>

						{/* Trigger the modal with a button 
						<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
						Open Modal</button>
						{/* Modal 
						<div id="myModal" className="modal fade" role="dialog">
							<div className="modal-dialog">
								{/* Modal content
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal">
										<span className="fa fa-times-circle-o fa-fw" />
										</button>
									</div>
									<div className="modal-body">
										<p>Some text in the modal.</p>
									</div>
									<div className="modal-footer">
										<p>SMALL BANNER PREVIEW</p>
									</div>
								</div>
							</div>
						</div>*/}
					</div>
				</div>

			</div>
		)
	}
}

export default withRouter(CreateWidget)