import gsap from "gsap";

import closeSvg from "../assets/images/icon-close.svg";
import hamburgerSvg from "../assets/images/icon-hamburger.svg";

export const showMenuAnimation = () => 
  gsap.timeline ({duration: .1})
    .to ('.nav-bar__menu', {display: "none"})
    .to ('.nav-bar__hamburger-button', {y: 50, opacity: 0, delay: .1})
    .to ('.nav-bar', {backgroundColor: "transparent"})
    .set (".nav-bar__hamburger-button-icon", {backgroundImage: `url(${hamburgerSvg})`}, '-=.5')
    .to ('.nav-bar__hamburger-button', {y: 1, opacity: 1, delay: .4})
    .fromTo ('.nav-bar__logo',
            {x:100, opacity:0},
            {display:"block", opacity: 1, x:1, delay: .2});

export const hideMenuAnimation = () => 
  gsap.timeline ({duration: .1})
    .to ('.nav-bar__logo',{x: 100, opacity: 0})
    .to ('.nav-bar__logo',{display: "none"})
    .to ('.nav-bar__hamburger-button', {y: 50, opacity: 0}, "-=.5")
    .to ('.nav-bar', {backgroundColor: "white"})
    .set (".nav-bar__hamburger-button-icon", {backgroundImage: `url(${closeSvg})`}, '-=.2')
    .to ('.nav-bar__hamburger-button', {y: 1, opacity: 1, delay: .4})
    .fromTo ('.nav-bar__menu',
            {x:100, opacity:0},
            {duration: 1, opacity:1, display: "block", delay: .2, x: 1})
    .from ('.nav-bar__menu-item',
          {duration: 1, opacity:1, x: 100, stagger: .2}, '-=1');