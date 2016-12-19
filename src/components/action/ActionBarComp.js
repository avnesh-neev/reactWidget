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
			<div style={{ color: 'blue', position: 'relative', borderBottom: '1px solid #0067FF' }}>
				<div style={{ display: 'inline-block', paddingLeft: 6, paddingTop: 3}}>
					<input type="checkbox" />
				</div>
				<div style={{ display: 'inline-block', padding: 6, fontSize: 13, position: 'absolute', top: -3 }}>
					Transport Domain
				</div>
				<div style={{ float: 'right' }}>
					<button style={{ border: '1px solid #0067FF', borderRadius: 2, backgroundColor: '#86AFC9', color: '#EEEEEE'}} 
							onClick={this.props.removeChild}> - </button>
					<button style={{ border: '1px solid #0067FF', borderRadius: 2, backgroundColor: '#86AFC9', color: '#EEEEEE'}} 
							onClick={this.props.addNewChild}>	+ </button>
				</div>
			</div>
		)
	}
} 

const ActionBarCompCnt = connect()(ActionBarComp);
export default ActionBarCompCnt;