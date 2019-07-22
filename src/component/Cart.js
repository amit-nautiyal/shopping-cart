import React, { Component } from "react";
import PropTypes from "prop-types";

class Cart extends Component {
  render() {
    const { cartItems, removeFunc, total } = this.props;
    return (
      <aside className="cart">
        <header className="cart__header">Cart</header>
        <section className="cart__body">
          {cartItems.map(c => (
            <div className="cart-group" key={c.name}>
              <div className="cart-row">
                <span>Name:</span>
                <span>{c.name}</span>
              </div>
              <div className="cart-row">
                <span>Price:</span>
                <span>${c.price.toFixed(2)}</span>
              </div>
              <div className="cart-row">
                <span>Qty:</span>
                <span>{c.quantity}</span>
              </div>
              <span
                className="remove-link"
                onClick={() => removeFunc(c.name, c.price, c.quantity)}
              >
                <em>Remove item</em>
              </span>
            </div>
          ))}
          {cartItems.length > 0 && (
            <div className="cart-row">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          )}
        </section>
      </aside>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFunc: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default Cart;
