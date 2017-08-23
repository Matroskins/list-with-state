const initialArray = [{
        firstRowColumn: { name: 'John Adams', rating: 32, toggleState: false, photoName: 'me' },
        secondRowColumn: { ideasNumber: 0, FollowingNUmbers: 50, Followers: 0 },
        id: 999
    },
    {
        firstRowColumn: { name: 'Ivan Akab', rating: 0, toggleState: false, photoName: 'Ivan' },
        secondRowColumn: { ideasNumber: 3, FollowingNUmbers: 1, Followers: 2 },
        id: 666
    }
]


const listElState = (state = initialArray, action) => {

    switch (action.type) {
        case 'TOGGLE_SELECTED_SYMBOL':
            return state.map(listEl => {
                debugger;
                return (listEl.id === action.id) ?
                    Object.assign({}, listEl, { firstRowColumn: Object.assign({}, listEl.firstRowColumn, { toggleState: action.selectState }) }) :
                    listEl
            })

        default:
            return state
    }
}
export default listElState;