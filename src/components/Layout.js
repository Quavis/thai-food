import React, {Component} from 'react';
// IMPORT Link
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "18rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(./images/header2.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <NavLink activeClassName="selected" to="/">MajesticThai</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="/menu">
                    <span>Menu </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="/findus">
                    <span>Find Us </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                Majestic Thai
              </div>
              <div className="subtitle" style={subtitleStyle}>
                East Meets West
              </div>
            </div>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">Majestic Thai </span>
          <span>
            100 Main Street, Spartanburg, SC, 29302 | (864) 898-9999
          </span>
        </footer>
      </div>
    );
  }
}
