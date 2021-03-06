import { HAMBURGER_TOGGLE } from "../Actions/ActionTypes";

const ActivateHamburger = (state = false, action) => {
  switch (action.type) {
    case HAMBURGER_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export default ActivateHamburger;
