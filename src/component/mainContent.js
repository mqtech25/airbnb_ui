import React from "react";
import Serves from "./sellitem";
import sellData from "./sellData";
export default function MainContent() {
  let data = sellData.map((elem) => {
    // let starRate = (elem.review.ratting / 5) * 100;
    return (
      // <Serves
      //   key={elem.id}
      //   img={elem.img}
      //   status={elem.status}
      //   title={elem.title}
      //   ratting={elem.review.ratting}
      //   totalReview={elem.review.totalreview}
      //   price={elem.price}
      //   location={elem.location}
      //   openSpot={elem.openSpot}
      //   starWidth={starRate}
      // />
      <Serves key={elem.id} {...elem} />
    );
  });
  return (
    <main className="App-body">
      <div className="container">
        <div className="heading">
          <h2>Online Experiences</h2>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
        <div className="App-sell">{data}</div>
      </div>
    </main>
  );
}
