// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = ({ price, img, description, title }) => {
  return (
    <div className="card">
      <p className="icon">🤍</p>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p className="description">{description}</p>
      <p className="price">${price} per night</p>
    </div>
  );
};

export default Card;
