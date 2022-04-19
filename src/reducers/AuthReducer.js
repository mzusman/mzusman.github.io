const auth = (state = { role: "GUEST" }, action) => {
  switch (action.type) {
    case "CHANGE_ROLE":
      return action.data
    default:
      return state;
  }
};
export default auth;
