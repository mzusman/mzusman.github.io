import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import Store from './components/Store'
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import reducer from './reducers'

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </Provider>
  , document.getElementById('root'));
