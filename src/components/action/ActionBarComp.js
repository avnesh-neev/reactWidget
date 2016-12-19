import React, { Component } from 'react';
import { connect } from 'react-redux'

class ActionBarComp extends Component {
	constructor(props) {
		super(props);
		this._addChild = this._addChild.bind(this);
		this._removeChild = this._removeChild.bind(this);
	}

	_addChild () {
		// this.props.dispatch()

	}

	_removeChild () {

	}

	render() {
		return (
			<div style={{ color: 'blue', border: '1px solid grey'}}>
				<div style={{ display: 'inline-block', padding: 3}}>
					<input type="checkbox" />
				</div>
				<div style={{ display: 'inline-block', padding: 3}}>
					Transport Domain
				</div>
				<div style={{ display: 'inline-block', padding: 3}} onClick={this.props.addNewChild}>	+ </div>
				<div style={{ display: 'inline-block', padding: 3}} onClick={this.props.removeChild}> - </div>
			</div>
		)
	}
} 

const ActionBarCompCnt = connect()(ActionBarComp);
export default ActionBarCompCnt;