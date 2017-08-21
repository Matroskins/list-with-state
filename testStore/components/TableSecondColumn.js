import React from 'react'
import PropTypes from 'prop-types'


const tableSecondColumn = ({ ideasNumber, FollowingNUmbers, Followers }) => {
    return ( <
        div >
        <
        div > { ideasNumber } < /div>  <
        div > { FollowingNUmbers } < /div> <
        div > { Followers } < /div> < /
        div >
    );
}

tableSecondColumn.propTypes = {
    ideasNumber: React.PropTypes.number.isRequired,
    FollowingNUmbers: React.PropTypes.number.isRequired,
    Followers: React.PropTypes.number.isRequired
}

export default tableSecondColumn;