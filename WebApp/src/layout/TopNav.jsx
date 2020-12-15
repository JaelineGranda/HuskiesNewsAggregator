import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTheme } from '../actions/news';
import AuthService from "../services/auth.service";
import './TopNav.css';

const logout = () => {
  debugger;
  AuthService.logout();
  window.location.reload(false);
}
const TopNav = ({ news, changeTheme }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg={news.theme} variant={news.theme}>
      <Container>
        {!localStorage.getItem('user') ?
          <Navbar.Brand href='/'>Welcome Guest!</Navbar.Brand> :
          <Navbar.Brand href='/'>Welcome {JSON.parse(localStorage.getItem("user")).username}!</Navbar.Brand>}
          <span className="dateTime">
              {Date().toLocaleString()}
          </span>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link activeClassName='active' exact as={NavLink} to='/'>
              Top News
            </Nav.Link>

            <Nav.Link activeClassName='active' as={NavLink} to='/Stocks'>
              Stocks
              </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/weather'>
              Weather

            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/bookmarks'>
              Bookmarks
            </Nav.Link>
            {!localStorage.getItem('user') ?
            <Nav.Link to="/signup" activeClassName='active' as={NavLink} className="button_sign"><li>
              Sign Up
                </li></Nav.Link>:null}
            {!localStorage.getItem('user') ?
              <Nav.Link to="/login" activeClassName='active' as={NavLink} className="button_sign"><li>
                Login
                </li></Nav.Link> : 
                <Nav.Link to="/" onClick={logout} activeClassName='active' as={NavLink} className="button_sign"><li>
                Logout
                </li></Nav.Link>}
            <Nav.Link className="switchContainer">
              <div>
                <div className="switchBtn"
                  onClick={() =>
                    changeTheme(news.theme === 'dark' ? 'light' : 'dark')
                  }
                  className={`circle-${news.theme === 'dark' ? 'light' : 'dark'}`}
                />
              </div>
              <span>Change color</span>
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
