import React, { Component } from 'react'

class UserInputField extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			inputvalue: ''
		}
	}

	
	render() {
		return (
			<div>
				<input type='text' defaultValue={this.props.text} 
						value={this.state.inputvalue} onChange={this.handleInputChange} />
			</div>
		)
	}
}

export default UserInputField