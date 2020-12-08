import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SingleNews from "./Components/NewsList/SingleNews/SingleNews";
import Layout from "./Components/Menubar/Layout/Layout"
import NewsList2 from "./Components/NewsList2/NewsList2";
import Newslist from "./Components/NewsList/Newslist";
import Login from './Components/login/login.component';
import Signup from './Components/signup/signup.component';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename={'NewsApp-using-React#'}>
      <Layout/>
        
        <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        <Route exact path="/NewsApp-using-React/" render={() => (<Redirect to="#/Home" />)} />
          <Route exact path="/:category" exact component={NewsList2}></Route>
          <Route exact path="/:category/:id" component={SingleNews}></Route>
          
        
          <Route exact path="/" render={() => (<Redirect to="/Home" />)} /> 
          

        </Switch>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
