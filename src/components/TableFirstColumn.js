import React from 'react'
import PropTypes from 'prop-types'
import SelectedSymbol from '../container/selectedSymbol'
import './componentsStyle/tableFirstColumn.css'
import chart from './img/chart.png'
import photo from './img/me.png'


const TableFirstColumn = ({ name, rating, toggleState, key }) => {
    debugger;
    return ( <
        div className = "first-column" >
        <
        img className = "user-photo"
        src = { photo }
        /> <
        div className = "column-nameRating" >
        <
        p > { name } < /p>  <div className="rating-block"> <
        img src = { chart }
        /> <
        p className = "rating-number" > { rating } < /p> < /
        div > <
        /div> <
        SelectedSymbol selectState = { toggleState }
        key = { key }
        / > < /div > )
}

TableFirstColumn.propTypes = {
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    toggleState: React.PropTypes.boolean.isRequired,
    key: React.PropTypes.number.isRequired
}

export default TableFirstColumn;