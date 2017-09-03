import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './redux';
import Nav from './components/Navigation'
import App from './containers/App'
import Contact from './containers/Contact'
import AlphabetCount from './containers/AlphabetCount'
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/alphabet-count' component={AlphabetCount} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
