import React, { Component } from 'react'
import UserValueRow from '../rows/UserValueRow'

class TableSectionComp extends Component {
	render() {
		// console.log('tableRows ', this.props.tableRows)
		return (
			<div>
				{
					this.props.tableRows.map((row) => {
						return (
							<UserValueRow checkAction={this.props.checkAction} row={row.id} 
									text={row.text} type={row.type} handleInputValue={this.props.handleInputValue} />
						)
					})
				}
			</div>
		)
	}
} 

export default TableSectionComp;