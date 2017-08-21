import React from 'react'
import PropTypes from 'prop-types'
import * as TableFirstColumn from './TableFirstColumn'
import * as TableSecondColumn from './TableSecondColumn'

const TableRow = ({ firstColumn, secondColumn }) => {
    return ( <
        div >
        <
        TableFirstColumn {...firstColumn } > < /TableFirstColumn>  <
        TableSecondColumn {...secondColumn } > < /TableSecondColumn>  < /
        div >
    )
}

tableSecondColumn.propTypes = {
    firstColumn: React.PropTypes.object.isRequired,
    secondColumn: React.PropTypes.object.isRequired
}

export default TableRow;