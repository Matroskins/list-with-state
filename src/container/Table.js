import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TableTitleRow from '../components/TableTitleRow'
import TableRow from '../components/TableRow'
import React from 'react'
import './containersStyle/Table.css'

let Table = ({ allState }) =>
    <
    div className = 'table-wrapper' >
    <
    TableTitleRow > < /TableTitleRow>  {

allState.map(RowElement =>
        <
        TableRow firstRowColumn = { RowElement.firstRowColumn }
        secondRowColumn = { RowElement.secondRowColumn }
        key = { RowElement.key }
        />)}  < /div >
        const mapStateToProps = (state) => ({
            allState: state.listElState
        })

        Table = connect(mapStateToProps)(Table);
        export default Table;