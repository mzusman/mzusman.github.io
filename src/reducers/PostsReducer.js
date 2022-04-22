const initialState = {
  data: [],
  section: "",
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "RECIEVE_POSTS":
      return {
        section: action.section,
        data: action.data,
      };

    case "SELECT":
      console.log(state);
      return state.map((a) =>
        a.title == action.title
          ? {
              ...a,
              selected: true,
            }
          : {
              ...a,
              selected: false,
            }
      );

    case "NEW":
      return [
        ...state,
        {
          selected: false,
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

export default posts;
