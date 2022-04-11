
const initialState = [
    {
        title: "About Me",
        selected: true,
        content: "About me"
    }, {
        title: "Blog",
        selected: true,
        content: "Blog Blog"
    }
]
const menu = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT':
            return state.map(a => a.title == action.title ?
                {
                    ...a,
                    selected: true
                } : a)
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