import "./Home.scss";
import GridItem from "./GridItem";
import GridItems from "../GridItems.json";
import SliderImg from "../SliderImg";
import { useState } from "react";

function Home() {
  const [currImgIndex, setcurrImgIndex] = useState(0);

  const DecIndex = () => {
    setcurrImgIndex(
      currImgIndex <= 0 ? SliderImg.length - 1 : currImgIndex - 1
    );
  };

  const IncIndex = () => {
    setcurrImgIndex(
      currImgIndex >= SliderImg.length - 1 ? 0 : currImgIndex + 1
    );
  };

  return (
    <div className="home">
      <div className="home__slideshow">
        <i
          className={
            currImgIndex === 2
              ? "fas fa-chevron-left white"
              : "fas fa-chevron-left"
          }
          onClick={DecIndex}
        ></i>
        <i
          className={
            currImgIndex === 2
              ? "fas fa-chevron-right white"
              : "fas fa-chevron-right"
          }
          onClick={IncIndex}
        ></i>
        {SliderImg.map((img, index) => {
          return (
            <div key={index}>{index === currImgIndex && <img src={img} />}</div>
          );
        })}
      </div>

      <div className="home__allContent">
        <div className="home__gridContainer">
          <GridItem
            title={GridItems[0].title}
            cap={GridItems[0].cap}
            img={GridItems[0].img}
          />

          <GridItem
            title={GridItems[1].title}
            cap={GridItems[1].cap}
            img={GridItems[1].img}
          />

          <GridItem
            title={GridItems[2].title}
            cap={GridItems[2].cap}
            img={GridItems[2].img}
          />

          <div className="sign-in">
            <span className="title">Sign in for your best experience</span>
            <button>Sign in securely</button>
          </div>
        </div>

        <div className="home__gridContainer">
          <GridItem
            title={GridItems[3].title}
            cap={GridItems[3].cap}
            img={GridItems[3].img}
          />
          <GridItem
            title={GridItems[4].title}
            cap={GridItems[4].cap}
            img={GridItems[4].img}
          />
          <GridItem
            title={GridItems[5].title}
            cap={GridItems[5].cap}
            img={GridItems[5].img}
          />

          <div className="credit-card">
            <span className="title">Pay your credit card bills on Amazon</span>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" />
            <a href="#">See more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
