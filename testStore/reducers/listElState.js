const initialArray = [{
    firstColumn: { photoUrl: 'img/me.png', name: 'John Adams', rating: '32', toggleState: false },
    secondColumn: { ideasNumber: '0', FollowingNUmbers: '50', Followers: '0' },
    id: 999
}]

const listElState = (state = initialArray, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECTED_SYMBOL':
            return state.map(listEl =>
                (listEl.id === action.id) ? ({...listEl, completed: !listEl.completed }) :
                listEl)
        default:
            return state
    }
}
export default listElState;

// listEl: { firstColumn: { toggleState: !action.toggleStateValue } }