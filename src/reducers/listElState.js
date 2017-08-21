const initialArray = [{
    firstRowColumn: { name: 'John Adams', rating: 32, toggleState: false },
    secondRowColumn: { ideasNumber: 0, FollowingNUmbers: 50, Followers: 0 },
    key: 999
}]


const listElState = (state = initialArray, action) => {

    switch (action.type) {
        case 'TOGGLE_SELECTED_SYMBOL':
            return state.map(listEl => {

                return (listEl.key === action.key) ?
                    Object.assign({}, listEl, { firstRowColumn: Object.assign({}, listEl.firstRowColumn, { toggleState: action.selectState }) }) :
                    listEl
            })

        default:
            return state
    }
}
export default listElState;

// listEl: { firstColumn: { toggleState: !action.toggleStateValue } }