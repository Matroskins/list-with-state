import React from 'react'
import PropTypes from 'prop-types'
import TableFirstColumn from './TableFirstColumn'
import TableSecondColumn from './TableSecondColumn'
import './componentsStyle/userRow.css'

const TableRow = ({ firstRowColumn, secondRowColumn, key }) => {
    debugger;
    return ( < div className = "user-row" >
        <
        TableFirstColumn {...Object.assign({}, firstRowColumn, { key: key }) }
        />  <
        TableSecondColumn {...secondRowColumn }
        />  </div >
    )
}

TableRow.propTypes = {
    firstRowColumn: React.PropTypes.object.isRequired,
    secondRowColumn: React.PropTypes.object.isRequired,
    key: React.PropTypes.number.isRequired
}

export default TableRow;