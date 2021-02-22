import './index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// custom
import App from './app/App';

// REDUX
import { Provider } from 'react-redux';
import configStore from './app/redux-store/storeConfig';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
