/**
 * Import Modules
 */
import React from "react";
import { useEffect } from "react";
import { connect } from 'react-redux';

import {showMenuAnimation, hideMenuAnimation} from "../animations/nav_animation";
import { toggleMenu } from '../redux_store.js';
import logo from "../assets/images/logo.svg";

const mapDispatchToProps = (dispatch) => (
  { toggleMenu: () => dispatch (toggleMenu ())
  }
);

const mapStateToProps = (state) => (
  { showMenu: state.showMenu }
);

const Presentational = (props) => {
  const { toggleMenu, showMenu } = props;
  useEffect ( () => {
    document.querySelector ('.nav-bar__hamburger-button-icon')
      .addEventListener ('click', (event) => {
        const state = event.target.classList.contains ("active");
        !state ? hideMenuAnimation () : showMenuAnimation ();
    })
  }, [])

  return (
    <nav className={`nav-bar ${showMenu ? "nav-bar__transparent" : "nav-bar__white"}`}>

      {/* Hamburger Toggle Button */}
      <button
        className='nav-bar__hamburger-button hide-desktop'>
        <div
          onClick={toggleMenu}
          className={`nav-bar__hamburger-button-icon ${showMenu ? "inactive" : "active"}`}>

          </div>
      </button>
      
      <div className="nav-bar__logo">
        <img className="nav-bar__logo-image" src={logo} alt="room"/>
      </div>

      <div className="nav-bar__menu hide-mobile">
        <ul className="nav-bar__menu-items">
          <li className="nav-bar__menu-item nav-bar__menu-item__one">
            <a href="./" className="nav-bar__menu-link">home</a>
          </li>
          <li className="nav-bar__menu-item nav-bar__menu-item__two">
            <a href="./" className="nav-bar__menu-link">shop</a>
          </li>
          <li className="nav-bar__menu-item nav-bar__menu-item__three">
            <a href="./" className="nav-bar__menu-link">about</a>
          </li>
          <li className="nav-bar__menu-item nav-bar__menu-item__four">
            <a href="./" className="nav-bar__menu-link">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

const NavBar = connect (mapStateToProps, mapDispatchToProps) (Presentational);

export default  NavBar