import React, { Component } from "react";
import CartItem from './CartItem';

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

  handleIncreaseQuantity=(product)=>{
    
        const{products} =this.state;
        const index = products.indexOf(product);
        products[index].qty++;

        this.setState({
            products:products
        })
  
  }

  handleDecreaseQuantity =(product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty>0){
      products[index].qty--;

      this.setState({
          products:products
      })}
  }

  handleDeleteQuantity =(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=>item.id !== id)
    this.setState({
      products:items
    })
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => {
          return <CartItem product={product} key={product.id}
          onIncrease={this.handleIncreaseQuantity} onDecrease={this.handleDecreaseQuantity}
          onDeleteQuantity ={this.handleDeleteQuantity} />;
        })}
      </div>
    );
  }
}

export default Cart;
