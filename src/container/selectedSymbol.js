import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleSelectedSymbol } from '../actions';
import './containersStyle/selectedElement.css';

let SelectedSymbol = ({ selectState, onClick }) => {
  let selectedIcon = selectState
    ? { classNameSelected: 'selectedElement', iconName: 'fa-check-circle', buttonText: 'Selected' }
    : { classNameSelected: 'unSelectedElement', iconName: 'fa-plus-circle', buttonText: 'Unselected' };
  return (
    <div className={selectedIcon.classNameSelected} onClick={onClick}>
      <div>
        <button className="selected__hover"> {selectedIcon.buttonText} </button>
      </div>
      <i className={'selectedIcon ' + ' fa ' + selectedIcon.iconName}> </i>
      <div>
        <button className="unSelected__hover"> {selectedIcon.buttonText} </button>
      </div>
      <i className={'unSelectedIcon ' + ' fa ' + selectedIcon.iconName}> </i>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  selectState: ownProps.selectState,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(ToggleSelectedSymbol(ownProps.selectState, ownProps.id));
  },
});

SelectedSymbol = connect(mapStateToProps, mapDispatchToProps)(SelectedSymbol);

export default SelectedSymbol;
