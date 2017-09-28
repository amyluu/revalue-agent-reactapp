import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { DropdownButton, MenuItem, Button, Modal } from 'react-bootstrap'
import bannerPreview from '../ModalBannerPreview.png'
import axios from 'axios'
import Cookies from 'universal-cookie'

import Preview1 from '../images/preview1.png'
import Preview2 from '../images/preview2.png'
import Preview3 from '../images/preview3.png'

class CreateWidget extends React.Component {
	componentDidMount(){
		document.body.style.backgroundColor = "white"// Set the style
		//document.body.className="body-component-a" // Or set the class
	}

	constructor() {
		super()
		const cookies = new Cookies()
		var authToken = cookies.get('AT')
		// console.log(authToken)
		this.open = this.open.bind(this)
    	this.close = this.close.bind(this)
    	this.handleDropdownSelect = this.handleDropdownSelect.bind(this)
    	this.dropdownTitle = this.dropdownTitle.bind(this)
		this.state = { 
			showModal: false,
			dropdownWidgetSize: 'widgetSizeSmall',
			myToken: {value: authToken},
			myArray: {},
			myWidget: {}
		};
	}
	// componentDidMount() {
	componentWillMount() {
	// WidgetGet() {
	// // WidgetGet() 
		// axios.get('http://54.149.159.111/user/widget', {
		axios.get('http://localhost:5000/user/widget', {
			headers: {AT: this.state.myToken.value}
		})
		.then(({ data })=> {
			// console.log(Object.values(data)[0]);
			this.setState(
				{ myArray:  Object.values(data)[0]}
			);
			this.setState(
				{ myWidget:  Object.values(this.state.myArray)[0]}
			);
			console.log(Object.values(this.state.myArray)[0]);
			console.log(this.state.myWidget);
		})
		// .catch((err)=> {
			// console.log(error)
		// })
		.catch(function (error) {
			console.log(error)
 		})
	}


	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	// map eventkey to title
	dropdownTitle(dropdownWidgetSize) {
		switch(dropdownWidgetSize) {
			case 'widgetSizeSmall':
				return 'Small (250x250)';
			case 'widgetSizeMedium':
				return 'Medium (350x350)';
			case 'widgetSizeLarge':
				return 'Large (450x450)';
			default:
				return 'Small (250x250)';
		}
	}

	handleDropdownSelect(eventKey, e) {
		this.setState({
			dropdownWidgetSize: eventKey
		});
	}

	previewImage(dropdownWidgetSize) {
		switch(dropdownWidgetSize) {
			case 'widgetSizeSmall':
				return Preview1;
			case 'widgetSizeMedium':
				return Preview2;
			case 'widgetSizeLarge':
				return Preview3;
			default:
				return Preview1;
		}
	}



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
						<DropdownButton onSelect={this.handleDropdownSelect} bsStyle="default" title={this.dropdownTitle(this.state.dropdownWidgetSize)} id="dropdown-basic-default">
							<MenuItem eventKey="widgetSizeSmall">Small (250x250)</MenuItem>
							<MenuItem eventKey="widgetSizeMedium">Medium (350x350)</MenuItem>
							<MenuItem eventKey="widgetSizeLarge">Large (450x450)</MenuItem>
						</DropdownButton>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-2">
						<p className="p-col">Widget code</p>
					</div>
					<div className="col-sm-10">
						{/*Widget code*/}
						<textarea rows={8} cols={70} className="textarea" defaultValue={this.state.myArray} /><br />
						<textarea rows={8} cols={70} className="textarea" defaultValue={this.state.myWidget} /><br />
						For more help with implementing the code, please see our Code Implementation Guide.<br />
						Widget may take up to two hours to appear on site.
					</div>
				</div>

				<div className="row">
					<div className="col-sm-2">
						<p className="p-col">Preview</p>
					</div>
					<div className="col-sm-10">
						<img src={this.previewImage(this.state.dropdownWidgetSize)}/>

						<Button bsStyle="default" onClick={this.open}>See example of placement</Button>

						<Modal show={this.state.showModal} onHide={this.close}>
							<Modal.Header closeButton>
								<Modal.Title>Modal heading</Modal.Title>
	         			</Modal.Header>
							<Modal.Body>
								<img 
									className="banner-preview" 
									alt="Banner preview" 
									src={this.previewImage(this.state.dropdownWidgetSize)} 
								/>
							</Modal.Body>
							<Modal.Footer>
								Banner preview
							</Modal.Footer>
						</Modal>
					</div>
				</div>

			</div>
		)
	}
}

export default withRouter(CreateWidget)