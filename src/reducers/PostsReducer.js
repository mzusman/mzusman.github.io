const initialState = {
  data: [],
  section: "",
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "RECIEVE_POST_CONTENT":
      return {
        section: action.data.section,
        data: state.data.map((a) =>
          a.title == action.data.title
            ? {
                ...a,
                content: action.data.content,
              }
            : {
                ...a,
                selected: false,
              }
        ),
      };

    case "RECIEVE_POSTS":
      return {
        section: action.section,
        data: action.data,
      };

    case "SELECT_POST":
      return {
        section: state.section,
        data: state.data.map((a) =>
          a.title == action.title
            ? {
                ...a,
                selected: true,
                content: undefined,
              }
            : {
                ...a,
                selected: false,
                content: undefined,
              }
        ),
      };

    default:
      return state;
  }
};

export default posts;
