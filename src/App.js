import React, { Component } from "react";
import "./App.css";
import Layout from "./component/Layout";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import Cart from "./component/Cart";

const products = [
  {
    id: 1,
    name: "Sledgehammer",
    price: 125.75
  },
  {
    id: 2,
    name: "Axe",
    price: 190.5
  },
  {
    id: 3,
    name: "Bandsaw",
    price: 562.13
  },
  {
    id: 4,
    name: "Chisel",
    price: 12.9
  },
  {
    id: 5,
    name: "Hacksaw",
    price: 18.45
  }
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [
        {
          id: 5,
          name: "Hacksaw",
          price: 18.45,
          quantity: 1
        }
      ]
    };
    this.handleAddFuc = this.handleAddFuc.bind(this);
  }

  handleAddFuc(product) {
    const existingProductIndex = this.state.cart.findIndex(
      p => p.id === product.id
    );

    if (existingProductIndex >= 0) {
      const cartProducts = this.state.cart.slice();

      const existingProduct = cartProducts[existingProductIndex];

      const updatedQyantityProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity
      };

      cartProducts[existingProductIndex] = updatedQyantityProduct;

      this.setState({
        cart: cartProducts
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {
    return (
      <main className="app">
        <header className="app-header">Shopping Cart</header>
        <Layout>
          <ProductList>
            {products.map(p => (
              <Product key={p.id} {...p} addFunc={this.handleAddFuc} />
            ))}
          </ProductList>
          <Cart cartItems={this.state.cart} />
        </Layout>
      </main>
    );
  }
}

export default App;
