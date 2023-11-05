import React from "react";
import "./Card.css";
import img1 from "../data/img1.jpg";

export default function Card(props) {
  const Category = props.Category.split(",");
  return (
    <div className="card-container" key={Math.random() * 1000}>
      <div className="card">
        <img className="product-image" src={img1} alt="product image" />
      </div>
      <div className="right-part">
        <div className="text-container">
          <h2>{props.Restaurant_Name}</h2>
          <span className="rating">Rating : {props.Delivery_Rating}</span>
        </div>

        <div className="phone-no">Phone No: {props.Phone_No}</div>
        {Category.map((item, index) => (
          <div className="category" key={index}>{item},</div>
        ))}
        <div className="category">Category : {props.Category},</div>
        <div className="address">Address : {props.Locality}</div>

        <a href={props.Website} target="_blank">
          Website
        </a>
      </div>
    </div>
  );
}
