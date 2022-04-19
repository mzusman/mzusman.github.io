
export const getButtons = () => dispatch => {
    fetch("http://localhost:3500/app/v1/menu").then(res => res.json())
        .then((res) =>
            dispatch({
                type: "RECIEVE_MENU",
                data: res
            })
            , (error) => error)
}