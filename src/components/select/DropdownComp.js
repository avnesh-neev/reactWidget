import React, { Component } from 'react'
import DropdownValueComp from './DropdownValueComp'

function DropdownComp () {
  const dropDownValue = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8']
  return (
    <div style={{ backgroundColor: '#98B4C9', zIndex: 100, padding: 10, 
                  position: 'absolute', top: 30, left: 0, width: '100%' }}>
      {
        dropDownValue.map((value) => {
          return <DropdownValueComp dValue={value}/>
        })
      }
    </div>
  )
}

export default DropdownComp;