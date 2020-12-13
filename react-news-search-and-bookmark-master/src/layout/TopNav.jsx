import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTheme } from '../actions/news';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from './../components/signup/signup.component';
import Login from './../components/login/login.component';

const TopNav = ({ news, changeTheme }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg={news.theme} variant={news.theme}>
      <Container>
        <Navbar.Brand href='/'>React News Search & Bookmark</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link activeClassName='active' exact as={NavLink} to='/'>
              Top News
            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/Stocks'>
              Stocks
            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/bookmarks'>
              Bookmarks
            </Nav.Link>
            <Nav.Link to="/signup" activeClassName='active' as={NavLink} className="button_sign"><li>
                    Sign Up
                </li></Nav.Link>

                <Nav.Link to="/login" activeClassName='active' as={NavLink} className="button_sign"><li>
                Login
                </li></Nav.Link>
            <Nav.Link>
              <div
                onClick={() =>
                  changeTheme(news.theme === 'dark' ? 'light' : 'dark')
                }
                className={`circle-${news.theme === 'dark' ? 'light' : 'dark'}`}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { changeTheme }
)(TopNav);
