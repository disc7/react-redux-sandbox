/* Application entry point file */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';   // Higher order component that attaches our Store to our react container components
import { Router, browserHistory } from 'react-router';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import routes from './routes';
// Webpack import convention
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

store.subscribe(() => {
  /* eslint-disable no-console */
  console.log("Store changed", store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
  );
