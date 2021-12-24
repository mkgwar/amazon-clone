import "./HamburgerMenu.scss";
import { HamburgerItems } from "../HamburgerItems";
import HamburgerItem from "./HamburgerItem";

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
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
