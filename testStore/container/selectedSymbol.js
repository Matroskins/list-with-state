import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { ToggleSelectedSymbol } from '../actions'

let selectedSymbol = ({ dispatch }) => {
    let selectedIcon = (store.getState(ToggleSelectedSymbol)) ? { classNameSelected: 'selectedElement', iconName: 'fa-selected', buttonText: 'Selected' } : { classNameSelected: 'selectedElement', iconName: 'fa-selected', buttonText: 'Unselected' }

    return ( <
        div className = { selectedIcon.classNameSelected } >
        <
        div className = 'selected__hover'
        onClick = { dispatch(ToggleSelectedSymbol(store.getState().firstColumn.selectedState)) } > { selectedIcon.buttonText } <
        /div> <
        div className = 'unSelected__hover'
        onClick = { dispatch(ToggleSelectedSymbol(store.getState().secondColumn.selectedState)) } > { selectedIcon.buttonText } <
        /div> <
        i className = { 'fa ' + selectedIcon.iconName } > < /i> <
        /div> 
    )
}

selectedSymbol = connect()(selectedSymbol);

export default selectedSymbol;