import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import { getButtons } from "./api/ClientApi";
import { Routes, Route } from "react-router-dom";
import MainView from "./components/MainView";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));

store.dispatch(getButtons());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <StyledEngineProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":buttons" element={<MainView />} />
          </Route>
        </Routes>
      </StyledEngineProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
