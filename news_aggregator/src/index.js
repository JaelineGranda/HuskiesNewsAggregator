import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Route, HashRouter} from 'react-router-dom'
import General from './general/General.js'
import Entertainment from './entertainment/Entertainment.js'
import SearchResults from './search/SearchResults.js'

ReactDOM.render(
	<HashRouter>
			<Route component={App} />
			<Route component={General} />
			<Route path="entertainment" component={Entertainment} />
			<Route path="news-search/:newsToSearchFor" component={SearchResults} />
	</HashRouter>,	
  document.getElementById('root')
);