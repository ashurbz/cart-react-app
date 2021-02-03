import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Phone",
          img: "",
          price: 999,
          qty: 1,
          id: 1,
        },
        {
          title: "Watch",
          img: "",
          price: 99,
          qty: 4,
          id: 2,
        },
        {
          title: "Laptop",
          img: "",
          price: 9999,
          qty: 3,
          id: 3,
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
