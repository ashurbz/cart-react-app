import React,{ Component } from 'react';
import './App.css';
import Cart from './components/Cart'
import Nav from './components/Nav'
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      Loading:true
    };
  }

 componentDidMount(){
   firebase.firestore().collection('Products').get().then((snapshot)=>{
     snapshot.docs.map((doc)=>{
       console.log(doc.data())
     })
     const products = snapshot.docs.map((doc)=>{
       const data = doc.data()
      data['id'] =doc.id;

      return data;

     })
     this.setState({
       products,
       Loading:false
     }
     )
   })
   
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
          products:products,
          
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
    const{products,Loading} = this.state;
  return (
    <div className="App">
      <Nav cartQty={this.handleCart()}/>
     <Cart
     products={products}
     onIncrease={this.handleIncreaseQuantity} onDecrease={this.handleDecreaseQuantity}
     onDeleteQuantity ={this.handleDeleteQuantity}
     />

        <span>Total Price:{this.totalPrice()}</span>
     {Loading && <h1>Loading Products....</h1>}


    </div>
  );
}
}

export default App;
