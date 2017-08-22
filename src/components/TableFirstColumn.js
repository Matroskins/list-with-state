import React from 'react'
import PropTypes from 'prop-types'
import SelectedSymbol from '../container/selectedSymbol'
import './componentsStyle/tableFirstColumn.css'
import chart from './img/chart.png'

const TableFirstColumn = ({ name, rating, toggleState, id, photoName }) => {

    return ( <
        div className = "first-column" >
        <
        img className = "user-photo"
        src = { require('./img/' + photoName + '.png') }
        /> <
        div className = "column-nameRating" >
        <
        p className = "name-user" > { name } < /p>  <div className="rating-block"> <
        img src = { chart }
        /> <
        p className = "rating-number" > { rating } < /p> < /
        div > <
        /div> <
        SelectedSymbol selectState = { toggleState }
        id = { id }
        / > < /div > )
}

TableFirstColumn.propTypes = {
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    toggleState: React.PropTypes.bool.isRequired,
    photoName: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
}

export default TableFirstColumn;