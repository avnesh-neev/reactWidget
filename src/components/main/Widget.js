import React, { Component } from 'react';
import update from 'react-addons-update'
import TableSectionComp from '../table/TableSectionComp'
import ActionBarComp from '../action/ActionBarComp'

class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableRows: [],
			numberOfRows: 0,
			selectedRows: []
		}
		this.addChild = this.addChild.bind(this);
		this.removeChild = this.removeChild.bind(this);
		this.createDeleteRowList = this.createDeleteRowList.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);
	}

	handleInputValue (id, value) {
		console.log('widget handleInputValue params ' + id + '|'+ value)
		let tableRows = this.state.tableRows;
		for (var i = 0; i < tableRows.length; i++) {
			console.log('tableRows[i].id == id' + tableRows[i].id + '|' + id );
			if(tableRows[i].id == +id) {
				tableRows[i].text = value;
			}
		}

		this.setState({
			tableRows: tableRows
		})

		console.log('widget handleInputValue ' + JSON.stringify(this.state.tableRows))

	}
	createDeleteRowList (e) {
		// debugger;
		let selectedRows = this.state.selectedRows
		console.log('create delete list ', )
		if(e.target.checked) {
			console.log('create delete list - checked')
			selectedRows.push(e.target.value)
			// this.setState({
			// 	selectedRows: selectedRows
			// })
		} else {
			for(var index = 0; index < selectedRows.length; index++) {
				if(e.target.value == selectedRows[index]) {
					selectedRows.splice(index, 1)
				}
				// let deleteIndex = selectedRows.findIndex(x => x.id === index)
			}
		}

		console.log('create delete list = ', selectedRows)

		this.setState({
			selectedRows: selectedRows
		})

		console.log('create delete list state selected row= ', this.state.selectedRows)
	}

	addChild (e) {
		e.preventDefault();
		let tableRows = this.state.tableRows;
		tableRows.push({ id: this.state.numberOfRows + 1, text: 'Default', type: 'text'})
		this.setState({
			tableRows: tableRows,
			numberOfRows: this.state.	numberOfRows + 1
		})
	}

	removeChild () {
		let tableRows = this.state.tableRows;
		let selectedRows = this.state.selectedRows;
		let newTableRows=[];
		console.log('removeChild state ' + this.state.selectedRows)
		for (var i = 0; i < tableRows.length; i++) {
			let flag = true;
			for (var j = 0; j < selectedRows.length; j++) {
				if(tableRows[i].id == selectedRows[j]) {
					flag = false;
					break;
				} else {
					flag = true;
				}
			}
			if(flag) {
				newTableRows.push(tableRows[i]);
			}
		}
		this.setState({
			tableRows: newTableRows,
			numberOfRows: newTableRows.length,
			selectedRows: []
		})

		var elms = document.getElementsByClassName('rowCheckbox');
		console.log("elms ", elms.length)
		for (var i=0; i < elms.length; i++) {
			elms[i].checked = false;
		}
		// console.log('new table rows ' + JSON.stringify(newTableRows))
		// console.log('new table rows ' + JSON.stringify(this.state.tableRows))
	}

	render() {
		return (
			<div style={{ width: 250, border: '1px solid #0067FF', borderRadius: 2 }}>
				<ActionBarComp addNewChild={ this.addChild } removeChild={ this.removeChild }/>
				<TableSectionComp tableRows={ this.state.tableRows } checkAction={this.createDeleteRowList}
					handleInputValue={this.handleInputValue}/>
			</div>
		)
	}
}

export default Widget;