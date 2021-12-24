import "./BlackScreen.scss";
import { HamburgerToggle } from "../Actions/ActionsIndex";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import ActivateHamburger from "../Reducers/ActivateHamburger";

function BlackScreen() {
  const dispatch = useDispatch();

  const ToggleHamburger = () => {
    dispatch(HamburgerToggle());
  };

  const isActive = useSelector((state) => state.ActivateHamburger);

  return (
    <div className={isActive ? "black-screen active" : "black-screen"}>
      <div className="black-screen__cover" onClick={ToggleHamburger}></div>
      <i className="fas fa-times" onClick={ToggleHamburger}></i>
    </div>
  );
}

export default BlackScreen;
