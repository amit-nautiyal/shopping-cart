import React from "react";

const ProductList = props => {
  return (
    <div className="product-list">
      <header className="product-list__header">Products</header>
      <div className="product-list__items">{props.children}</div>
    </div>
  );
};

export default ProductList;
