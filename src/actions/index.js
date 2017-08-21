export const ToggleSelectedSymbol = (selectStateValue, keyValue) => ({
    type: 'TOGGLE_SELECTED_SYMBOL',
    key: keyValue,
    selectState: !selectStateValue
})