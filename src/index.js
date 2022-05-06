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
import { getButtons } from "./api/SectionsApi";
import { Routes, Route } from "react-router-dom";
import MainView from "./components/MainView";
import { getAuth } from "./api/SectionsApi";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/system";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));
// const myTheme = createTheme({
// Set up your custom MUI theme here
// });
store.dispatch(getButtons());
store.dispatch(getAuth());

ReactDOM.render(
  // <ThemeProvider theme={myTheme}>
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
  // </ThemeProvider>,
  document.getElementById("root")
);
