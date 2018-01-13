import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import IntroNav from './config/routes';
import { AlertProvider } from './components/alert';

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <IntroNav />
    </AlertProvider>
  </Provider>
);
