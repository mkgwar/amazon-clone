import "./HamburgerItem.scss";

function HamburgerItem({ title, links }) {
  return (
    <div className="hamburger-item">
      <div className="hamburger-item__title">{title}</div>

      <div className="hamburger-item__links">
        {links.map((link, index) => {
          return (
            <a href="https://www.amazon.in/" key={index}>
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default HamburgerItem;
