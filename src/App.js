import "./App.scss";
import HamburgerMenu from "./components/HamburgerMenu";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import BlackScreen from "./components/BlackScreen";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import ActivateHamburger from "./Reducers/ActivateHamburger";

function App() {
  const isActive = useSelector((state) => state.ActivateHamburger);
  return (
    <section className={isActive ? "app active" : "app"}>
      <Navbar />
      <Menu />
      <HamburgerMenu />
      <BlackScreen />
      <Home />
    </section>
  );
}

export default App;
