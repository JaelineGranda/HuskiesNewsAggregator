import React, { Component } from 'react';
import { Provider } from '../../context';
import Header from '../layout/Header';
import SearchForm from '../search/SearchForm';
import WeatherDashboard from './WeatherDashboard';
import Footer from '../layout/Footer';

import '../../bootstrap.css';
import '../../App.css';

// checks if required value is left blank
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider>
      <div className="App">
        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <div className="d-flex flex-column mt-3">
                <Header />
                <SearchForm />
                <WeatherDashboard />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
    );
  }
}