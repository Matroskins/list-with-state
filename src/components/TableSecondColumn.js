import React from 'react'
import PropTypes from 'prop-types'
import './componentsStyle/tableSecondColumn.css'

const TableSecondColumn = ({ ideasNumber, FollowingNUmbers, Followers }) => {
    return ( <
        div className = "stats-columns" >
        <
        div className = "ideas-column" > < p > { ideasNumber } < /p> < /div > <
        div className = "following-column" > < p > { FollowingNUmbers } < /p> < /div > <
        div className = "followers-column" > < p > { Followers } < /p>< /div > < /
        div >
    );
}

TableSecondColumn.propTypes = {
    ideasNumber: React.PropTypes.number.isRequired,
    FollowingNUmbers: React.PropTypes.number.isRequired,
    Followers: React.PropTypes.number.isRequired
}

export default TableSecondColumn;