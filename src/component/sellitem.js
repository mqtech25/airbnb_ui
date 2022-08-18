import React from "react";

export default function Serves(props) {
  let starWidth = (props.review.ratting / 5) * 100;
  let badgeText = "";
  if (props.openSpot === 0) {
    badgeText = "sold out";
  } else if (props.location === "online") {
    badgeText = "online";
  }
  return (
    <div className="App-sell-item">
      <a href="#" className="App-item-link">
        <div className="App-sell-item-img">
          <img src={props.img} className="item-img" alt="product1"></img>
          <div className="App-sell-item-img-badge">
            {badgeText !== "" && (
              <span className="badge bg-light text-uppercase">{badgeText}</span>
            )}
          </div>
        </div>
        <div className="App-sell-item-dec">
          <div className="rating">
            <div
              className="rattings"
              style={{ backgroundImage: "url(/img/star1.png)" }}
            >
              <div
                className="rattings-given"
                style={{
                  width: `${starWidth}%`,
                  backgroundImage: "url(/img/star.png)",
                }}
              ></div>
            </div>
            <p className="total-ratting">
              {props.review.ratting}
              <span className="total-sell text-light">
                ({props.review.totalReview})
              </span>
              <sup>
                <strong className="text-light"> .</strong>
              </sup>
              <span className="which-country-sell text-light">
                {props.location}
              </span>
            </p>
          </div>
          <div className="title">
            <p>{props.title}</p>
          </div>
          <div className="price">
            ${props.price}/
            <span className="price-for-what text-light">person</span>
          </div>
        </div>
      </a>
    </div>
  );
}
