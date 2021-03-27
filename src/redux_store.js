import { createStore } from "redux";


// default app state
const defaultState = {
  showMenu: "false",
}

// Actions
const TOGGLE_MENU = "TOGGLE_MENU";

// Action creators
export const toggleMenu = () => ({ type: TOGGLE_MENU });


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: 
      return { ...state, showMenu: !state.showMenu }
    default: 
      return { ...state }
  }
}


const store = createStore (reducer);

export default store;