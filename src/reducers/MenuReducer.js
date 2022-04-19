
const menu = (state = [], action) => {
    switch (action.type) {
        case 'RECIEVE_MENU':
            return action.data

        case 'SELECT':
            console.log(state)
            return state.map(a => a.title == action.title ?
                {
                    ...a,
                    selected: true
                } :
                {
                    ...a,
                    selected: false
                }
            )

        case 'NEW':
            return [
                ...state,
                {
                    selected: false,
                    title: action.title
                }
            ]
        default:
            return state
    }
}
export default menu