import React from "react";
import PropTypes from "prop-types";
import placeholder from "../placeholder.png";

const Product = props => {
  const { name, price, addFunc } = props;
  return (
    <article className="product-list__item" id={name}>
      <img src={placeholder} alt={name} />
      <h2>{name}</h2>
      <div>${price}</div>
      <button
        className="btn btn-primary"
        onClick={() => addFunc({ name, price, quantity: 1 })}
      >
        Add to cart
      </button>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addFunc: PropTypes.func.isRequired
};

export default Product;
