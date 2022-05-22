const address = "34.135.43.94"
export const deletePost = (data) => (dispatch) => {
  fetch("http://34.135.43.94:3500/app/v1/posts/del", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_POSTS",
          data: res,
          section: data.section,
        }),
      (error) => error
    );
};

export const addPost = (data) => (dispatch) => {
  fetch("http://34.135.43.94:3500/app/v1/posts/add", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_POSTS",
          data: res,
          section: data.section,
        }),
      (error) => error
    );
};

export const getPostByTitle = (data) => (dispatch) => {
  fetch("http://34.135.43.94:3500/app/v1/post_by_title", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_POSTS",
          section: section,
          data: res,
        }),
      (error) => error
    );
};

export const getAllTitlesPostsBySection = (section) => (dispatch) => {
  fetch("http://34.135.43.94:3500/app/v1/posts_titles", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(section),
  })
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_POSTS",
          section: section,
          data: res,
        }),
      (error) => error
    );
};

export const editPost = (data) => (dispatch) => {
  fetch("http://34.135.43.94:3500/app/v1/posts/edit", {
    method: "POST",
    headers: {
      Accpet: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_POSTS",
          data: res,
          section: data.section,
        }),
      (error) => error
    );
};
