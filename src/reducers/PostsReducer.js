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

    case "SELECT_POST":
      console.log(state);
      return {
        section: state.section,
        data: state.data.map(a=>a.title == action.title ? {
          ...a,
          selected:true
        }:{
          ...a,
          selected:false
        }
        ),
      };

    default:
      return state;
  }
};

export default posts;
