export const ToggleSelectedSymbol = (selectStateValue, id) => ({
    type: 'TOGGLE_SELECTED_SYMBOL',
    id: id,
    selectState: !selectStateValue
})