import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import Info from "./users/EntryPoint"
import configureStore from './store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <Info />
  </Provider>,
  document.getElementById('root'));
