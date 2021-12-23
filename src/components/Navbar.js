import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar__logo">Amazon</span>

      <span className="navbar__option navbar__option--address">
        <i className="fas fa-map-marker-alt"></i>
        <span>
          Hello
          <span className="navbar__option--bold">Select your address</span>
        </span>
      </span>

      <div className="navbar__searchContainer">
        <input type="text" className="navbar__searchBar" />
        <button className="navbar__searchButton">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <span className="navbar__option">
        Hello, Sign in
        <span className="navbar__option--bold">Account &amp; Lists</span>
      </span>

      <span className="navbar__option">
        Returns
        <span className="navbar__option--bold">&amp; Orders</span>
      </span>

      <span className="navbar__option navbar__cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="navbar__cartCount">0</span>
      </span>
    </div>
  );
}

export default Navbar;
