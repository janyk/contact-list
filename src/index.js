import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import App from './components/App'
import Contact from './components/Contact'
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
