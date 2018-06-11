import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers/';
import './fonts/';

import Game from './components/Game';

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(
  reducers,
  middleware
);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
);
