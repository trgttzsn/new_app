

import React, { useState } from 'react';
import { Text } from 'react-native';
import Routes from './navigation/Routes';

import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';


function App(): JSX.Element {

  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
  });



  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


export default App;
