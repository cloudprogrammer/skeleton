import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';

const middleware = [];

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

const onComplete = (error, success) => {
  if (error) {
    console.log('Error creating Redux store', error);
  }
};

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store;
