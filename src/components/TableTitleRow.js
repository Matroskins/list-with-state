import React from 'react'
import './componentsStyle/titleRow.css'
import './componentsStyle/tableSecondColumn.css'

let TableTitle = () => {
    return ( < div className = 'title-row' >
        <
        div className = 'first-column' > < /div> <
        div className = 'ideas-column' >
        <
        p > Ideas < /p> < /
        div > <
        div className = 'following-column' >
        <
        p > Following < /p> < /
        div > <
        div className = 'followers-column' >
        <
        p > Followers < /p> < /
        div > <
        /div>
    )
}

export default TableTitle;