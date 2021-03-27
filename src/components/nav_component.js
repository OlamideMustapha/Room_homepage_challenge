/**
 * Import Modules
 */
import React from "react";
import { useEffect } from "react";
import { connect } from 'react-redux';
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";


import { toggleMenu } from '../redux_store.js';
import logo from "../assets/images/logo.svg";
import closeSvg from "../assets/images/icon-close.svg";
import hamburgerSvg from "../assets/images/icon-hamburger.svg";

gsap.registerPlugin(CSSRulePlugin)

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
    gsap.timeline ({duration: .9})
      .to ('.nav-bar__menu', {duration: 0, display: "none"})
      .from ('.nav-bar', {y:50, opacity:0},)
      .from ('.nav-bar__logo',{x:100, opacity:0, delay: .5})
    }, []);
    
    useEffect ( () => {
      document.querySelector ('.nav-bar__hamburger-button-icon').addEventListener ('click', (event) => {
        const state = event.target.classList.contains ("active");

      if (!state) {
        gsap.timeline ({duration: .1})
          .to ('.nav-bar__logo',{x: 100, opacity: 0})
          .to ('.nav-bar__logo',{display: "none"})
          .to ('.nav-bar__hamburger-button', {y: 50, opacity: 0}, "-=.5")
          .to ('.nav-bar', {backgroundColor: "white"})
          .set (".nav-bar__hamburger-button-icon", {backgroundImage: `url(${closeSvg})`}, '-=.1')
          .to ('.nav-bar__hamburger-button', {y: 1, opacity: 1, delay: .9})
          .fromTo ('.nav-bar__menu',
                  {x:100, opacity:0},
                  {duration: 1, opacity:1, display: "block", delay: .2, x: 1})
          .from ('.nav-bar__menu-item',
                {duration: 1, opacity:1, x: 100, stagger: .2}, '-=1')
      } else {
        gsap.timeline ({duration: .1})
          .to ('.nav-bar__menu', {display: "none"})
          .to ('.nav-bar__hamburger-button', {y: 50, opacity: 0, delay: .1})
          .to ('.nav-bar', {backgroundColor: "black"})
          .set (".nav-bar__hamburger-button-icon", {backgroundImage: `url(${hamburgerSvg})`}, '-=.5')
          .to ('.nav-bar__hamburger-button', {y: 1, opacity: 1, delay: .4})
          .fromTo ('.nav-bar__logo',
                  {x:100, opacity:0},
                  {display:"block", opacity: 1, x:1, delay: .2})
      }
    })
  }, [])

  return (
    <nav className={`nav-bar ${showMenu ? "nav-bar__transparent" : "nav-bar__white"}`}>

      {/* Hamburger Toggle Button */}
      <button
        className={`nav-bar__hamburger-button`}>
        <div
          onClick={toggleMenu}
          className={`nav-bar__hamburger-button-icon ${showMenu ? "inactive" : "active"}`}>

          </div>
      </button>
      
      <div className="nav-bar__logo">
        <img className="nav-bar__logo-image" src={logo} alt="room"/>
      </div>

      <div className="nav-bar__menu">
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