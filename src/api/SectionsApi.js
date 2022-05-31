const address = "34.68.199.227";
export const getAuth = () => (dispatch) => {
  fetch("http://" + address + ":3500/app/v1/auth")
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "CHANGE_ROLE",
          data: res,
        }),
      (error) => error
    );
};

export const deleteButton = (data) => (dispatch) => {
  fetch("http://" + address + ":3500/app/v1/menu/del", {
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
          type: "RECIEVE_MENU",
          data: res,
        }),
      (error) => error
    );
};

export const addButton = (data) => (dispatch) => {
  fetch("http://" + address + ":3500/app/v1/menu/add", {
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
          type: "RECIEVE_MENU",
          data: res,
        }),
      (error) => error
    );
};

export const editButton = (data) => (dispatch) => {
  fetch("http://" + address + ":3500/app/v1/menu/edit", {
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
          type: "RECIEVE_MENU",
          data: res,
        }),
      (error) => error
    );
};

export const getButtons = () => (dispatch) => {
  fetch("http://"+address+":3500/app/v1/menu")
    .then((res) => res.json())
    .then(
      (res) =>
        dispatch({
          type: "RECIEVE_MENU",
          data: res,
        }),
      (error) => error
    );
};
