import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.name} className="card-image" />
      <div className="card-footer">
        <span className="item-name">{item.name}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
