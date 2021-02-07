import React, { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      Loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection("Products").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;

        return data;
      });
      this.setState({
        products,
        Loading: false,
      });
    });
  }

  addProduct = () => {
    this.db
      .collection("Products")
      .add({
        title: "Washing Machine",
        img:
          "https://www.lg.com/in/images/washing-machines/md07512155/gallery/FHT1065HNL-Washing-Machines-Right-View-D-06.jpg",
        qty: 4,
        price: 20000,
      })
      .then((docRef) => {
        console.log("docRef", docRef);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

   const docRef= this.db.collection('Products').doc(products[index].id)
   docRef.update({
     qty : products[index].qty +1
   }).then(()=>{
     console.log('updated')
   }).catch((error)=>{
     console.log('error',error)
   })
    // products[index].qty++;

    // this.setState({
    //   products: products,
    // });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {

      const docRef = this.db.collection('Products').doc(products[index].id)

      docRef.update({
        qty: products[index].qty-1
      }).then(()=>{
        console.log('decrease update')
      }).catch((err)=>{
        console.log('err',err)
      })

      // products[index].qty--;

      // this.setState({
      //   products: products,
      // });
    }
  };

  handleDeleteQuantity = (id) => {
    // const { products } = this.state;

    const docRef = this.db.collection('Products').doc(id);
    docRef.delete().then(()=>{
      console.log('deleted succcessfullu');
    }).catch((err)=>{
      console.log('err',err)
    })
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items,
    // });
  };

  handleCart = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count = count + product.qty;
    });

    return count;
  };

  totalPrice = () => {
    const { products } = this.state;
    let priceCount = 0;
    products.forEach((product) => {
      priceCount = priceCount + product.qty * product.price;
    });
    return priceCount;
  };
  render() {
    const { products, Loading } = this.state;
    return (
      <div className="App">
        <Nav cartQty={this.handleCart()} />
        <button onClick={this.addProduct}>Add a Product</button>
        <Cart
          products={products}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
        />

        <span>Total Price:{this.totalPrice()}</span>
        {Loading && <h1>Loading Products....</h1>}
      </div>
    );
  }
}

export default App;
