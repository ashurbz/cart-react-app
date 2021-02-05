import React,{ Component } from 'react';
import './App.css';
import Cart from './components/Cart'
import Nav from './components/Nav'

class App extends Component {
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

  handleCart =()=>{
    const {products} =this.state;
    let count =0;
   products.forEach((product)=>{
    count = count+product.qty;
   })

   
    return count;
  }

  totalPrice=()=>{
    const{products} =this.state;
    let priceCount =0;
    products.forEach((product)=>{
      priceCount = priceCount+product.qty *product.price
    })
    return priceCount;
  }
  render(){
    const{products} = this.state;
  return (
    <div className="App">
      <Nav cartQty={this.handleCart()}/>
     <Cart
     products={products}
     onIncrease={this.handleIncreaseQuantity} onDecrease={this.handleDecreaseQuantity}
     onDeleteQuantity ={this.handleDeleteQuantity}
     />
        <span>Total Price:{this.totalPrice()}</span>

    </div>
  );
}
}

export default App;
