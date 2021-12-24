import "./GridItem.scss";

function GridItem({ title, cap, img }) {
  return (
    <div className="gridItem">
      <span className="gridItem__title">{title}</span>

      <div className="gridItem__container">
        <div className="gridItem__item">
          <img src={img} alt="Grid" />
          {cap}
        </div>
        <div className="gridItem__item">
          <img src={img} alt="Grid" />
          {cap}
        </div>
        <div className="gridItem__item">
          <img src={img} alt="Grid" />
          {cap}
        </div>
        <div className="gridItem__item">
          <img src={img} alt="Grid" />
          {cap}
        </div>
      </div>

      <a href="#">See more</a>
    </div>
  );
}

export default GridItem;
