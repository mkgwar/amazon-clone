import "./HamburgerMenu.scss";
import { HamburgerItems } from "../HamburgerItems";
import HamburgerItem from "./HamburgerItem";
import { useSelector } from "react-redux";
import ActivateHamburger from "../Reducers/ActivateHamburger";

function HamburgerMenu() {
  const isActive = useSelector((state) => state.ActivateHamburger);

  return (
    <div className={isActive ? "hamburger-menu active" : "hamburger-menu"}>
      <div className="hamburger-menu__header">
        <i className="fas fa-user-circle"></i>
        <span className="hamburger-menu__title">Hello, Sign in</span>
      </div>

      <div className="hamburger-menu__overflowContainer">
        {HamburgerItems.map((item, index) => {
          return <HamburgerItem title={item[0]} links={item[1]} key={index} />;
        })}

        <div className="hamburger-menu__bottomPadding"></div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
