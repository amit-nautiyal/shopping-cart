import React from "react";
import PropTypes from "prop-types";

const Product = props => {
  const { id, name, price, addFunc } = props;
  return (
    <article className="product-list__item" id={id}>
      <h2>{name}</h2>
      <div>${price}</div>
      <button onClick={() => addFunc({ id, name, price, quantity: 1 })}>
        Add to cart
      </button>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addFunc: PropTypes.func.isRequired
};

export default Product;
