import React, { Component } from 'react'

function DropdownValueComp (props) {
  return( 
    <div style={{ padding: 5, color: 'white'}}>
      {props.dValue}
    </div>
  )
}

export default DropdownValueComp;