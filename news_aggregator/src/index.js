import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, HashRouter} from 'react-router-dom';
import General from './general/General.js'

ReactDOM.render(
  <HashRouter>
  <Route path="/" component={App} >
    <Route component={General} />
  </Route>
</HashRouter>,
  document.getElementById('root')
);