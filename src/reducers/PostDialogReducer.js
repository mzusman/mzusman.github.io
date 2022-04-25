const postDialog = (state = { state: "NO_ACTIVE" }, action) => {
  switch (action.type) {
    case "ADD_POST_DIALOGE":
      return {
        state: "ADD",
      };
    case "EDIT_POST_DIALOGE":
      return {
        state: "EDIT",
        title: action.title,
        content: action.content,
      };
    case "NO_ACTIVE":
      return {
        state: "NO_ACTIVE",
      };
    default:
      return state;
  }
};
export default postDialog;
