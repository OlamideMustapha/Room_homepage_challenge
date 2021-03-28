/**
 * Importind dependencies
 */
import { useEffect } from "react";

import "./sass/App.sass";
import start from "./animations/App_animation.js";
import Hero from "./components/hero_component.js";
import NavBar from "./components/nav_component.js";


const App = (props) => {
  useEffect ( () => {
    // start animation
    start ();
  }, []);

  return (
    <>
      <header className="header">
        <NavBar />
        <Hero />
      </header>
    </>
  )
}


export default App
