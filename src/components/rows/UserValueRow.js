import React, {Component } from 'react'
import DropdownComp from '../select/DropdownComp'

class UserValueRow extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputSubmit = this.handleInputSubmit.bind(this);
		this.handleLabelClick = this.handleLabelClick.bind(this);
		this.handleDropdown = this.handleDropdown.bind(this);
		
		this.state={
			editInputVisibility: true,
			dropdownVisibility: false
			// labelInputVisibility: 'none'
		}
	}

	handleDropdown (e) {
		e.preventDefault();
		this.setState({
			dropdownVisibility: !this.state.dropdownVisibility
		})
	}

	handleLabelClick (e) {
		e.preventDefault();

		this.setState({
			editInputVisibility: true
		})
	}

	handleInputSubmit (e) {
		if(e.keyCode === 13){
			e.preventDefault(); // Ensure it is only this code that rusn
			this.setState({
				editInputVisibility: false
			})
		}
	}

	handleInputChange (e) {
		let id = e.target.id;
		let value = e.target.value

		this.props.handleInputValue(id, value)
	} 

	render() {
		// console.log('this prop key' + this.props.row);
		return (
			<div style={{ color: 'blue', position: 'relative'}}>
				<div style={{ display: 'inline-block', padding: 6}}>
					<input className='rowCheckbox' type="checkbox" value={'' +this.props.row} onClick={this.props.checkAction}/>
				</div>
				<div style={{ display: 'inline-block' }}	>
				{ this.state.editInputVisibility ?
					<div ref='editInput'>
						<input id={this.props.row} type='text' style={{ border: 'none'}}
								value={this.props.text} onChange={this.handleInputChange} onKeyDown={this.handleInputSubmit} />
						<div style={{ float: 'right'}} onClick={this.handleDropdown}>...</div>
					</div>
					:
					<div ref='labelInput' onClick={this.handleLabelClick} style={{ width: '100%'}}>
						<div>{this.props.text}</div>
					</div>
				}					
				</div>

				{ this.state.dropdownVisibility ? <DropdownComp /> : '' }
				
			</div>
		)
	}
}

export default UserValueRow