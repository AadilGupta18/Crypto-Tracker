import React from "react";
import "./post.css";

const Post = (props) => {
  return (
    <div>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={props.image} alt="crypto" />
            <h1>{props.name}</h1>
            <p className="coin-symbol"></p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Rs.{props.price}</p>

            {props.pricechange < 0 ? (
              <p className="coin-percent red">
                {props.pricechange.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green">
                {props.pricechange.toFixed(2)}%
              </p>
            )}
            <p className="coin-marketcap">
              Mkt Cap: Rs.{props.marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
