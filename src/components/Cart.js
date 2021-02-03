import React, { Component } from "react";
import CartItem from './CartItem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Phone",
          img: "https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-F17-PROFUTU629745BED6286A/0..png",
          price: 999,
          qty: 1,
          id: 1,
        },
        {
          title: "Watch",
          img: "https://fossil.scene7.com/is/image/FossilPartners/FS5731-alt?$sfcc_fos_medium$",
          price: 99,
          qty: 4,
          id: 2,
        },
        {
          title: "Laptop",
          img: "https://cdn.vox-cdn.com/thumbor/U9bVQsVE1qeyj04xJ-YAPuVheBw=/0x0:2040x1351/1200x800/filters:focal(857x513:1183x839)/cdn.vox-cdn.com/uploads/chorus_image/image/65169322/VLS_2759.0.jpg",
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
