import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HashRouter,Route} from 'react-router-dom';
import General from './general/General.js';
import Entertainment from './entertainment/Entertainment.js';
import SearchResults from './search/SearchResults.js';
import Login from './login/login.component';
import Signup from './signup/signup.component';

ReactDOM.render(
	<HashRouter>
			<Route exact path="/" component={App}/>
			<Route exact path="/" component={General}/>
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			<Route path="entertainment" component={Entertainment} />
			<Route path="news-search/:newsToSearchFor" component={SearchResults} />
	</HashRouter>,	
  document.getElementById('root')
);