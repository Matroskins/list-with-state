//как вызвать по конкретному id? 
import selectedSymbol from '../container/selectedSymbol'
import React from 'react'
import PropTypes from 'prop-types'


const tableFirstColumn = ({ photoUrl, name, rating }) => {
    return ( <
        div >
        <
        img url = { photoUrl } > < /img>  <
        div >
        <
        p > { name } < /p>  <
        p > { rating } < /p>  <
        /div>  <
        selectedSymbol > < /selectedSymbol> <
        /div> 
    )
}

tableFirstColumn.propTypes = {
    photoUrl: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired
}

export default tableFirstColumn;