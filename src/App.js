import "./App.scss";
import HamburgerMenu from "./components/HamburgerMenu";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <HamburgerMenu />
      <Home />
    </>
  );
}

export default App;
