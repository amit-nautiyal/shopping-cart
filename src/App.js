import React, { Component } from "react";
import "./App.css";
import Layout from "./component/Layout";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import Cart from "./component/Cart";

// Products array
const products = [
  {
    name: "Sledgehammer",
    price: 125.75
  },
  {
    name: "Axe",
    price: 190.5
  },
  {
    name: "Bandsaw",
    price: 562.13
  },
  {
    name: "Chisel",
    price: 12.9
  },
  {
    name: "Hacksaw",
    price: 18.45
  }
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [], // empty array to hold cart items
      total: 0
    };
    this.handleAddFuc = this.handleAddFuc.bind(this);
    this.handleRemoveFuc = this.handleRemoveFuc.bind(this);
  }

  componentWillMount() {
    // Fetch products and total stored in localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    const storedTotal = JSON.parse(localStorage.getItem("total"));
    if (storedProducts !== null && storedTotal !== null) {
      this.setState({
        cart: storedProducts,
        total: storedTotal
      });
    }
  }
  componentDidUpdate() {
    // Store products and total in localStorage
    localStorage.setItem("products", JSON.stringify(this.state.cart));
    localStorage.setItem("total", JSON.stringify(this.state.total));
  }

  handleRemoveFuc(name, price, quantity) {
    // function to remove item from the cart and update the total
    const existingProductIndex = this.state.cart.filter(p => p.name !== name);
    let calculateTotal = this.state.total - price * quantity;
    this.setState({
      total: calculateTotal
    });
    this.setState({
      cart: existingProductIndex
    });
  }

  handleAddFuc(product) {
    // function to add product to the cart and also update total.
    const existingProductIndex = this.state.cart.findIndex(
      // this function check if the product already exist in the cart or not
      p => p.name === product.name
    );

    let calculateTotal = this.state.total + product.price * product.quantity;

    this.setState({
      total: calculateTotal
    });

    // if the product already exist we update the quantity filed else we add new product to the cart
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
              <Product key={p.name} {...p} addFunc={this.handleAddFuc} />
            ))}
          </ProductList>
          <Cart
            cartItems={this.state.cart}
            removeFunc={this.handleRemoveFuc}
            total={this.state.total}
          />
        </Layout>
      </main>
    );
  }
}

export default App;
