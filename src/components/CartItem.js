import React, { Component } from "react";
import "./CartItem.css";

class CartItem extends Component {
  //  constructor(){
  //      super()
  //      this.state={
  //         price:9000,
  //         qty: 1,
  //         title:"Mobile"
  //      }
  //  }

  //  increaseQuantity=()=>{
  //      //form 1
  //     // this.setState({
  //     //     qty: this.state.qty +1
  //     // })
  //     this.setState((prevState)=>{
  //         return{
  //             qty: prevState.qty+1
  //         }
  //     })
  //  }

  //  decreaseQuantity=()=>{
  //      if(this.state.qty>0){
  //      this.setState({
  //          qty:this.state.qty -1
  //      })}
  //  }

  render() {
    const { price, qty, title, img } = this.props.product;

    return (
      <div>
        <div className="image_container">
          <h2>{title}</h2>
          <img className="image" src={img} alt="mobile" />
        </div>
        <div className="details">
          <span>Rs: {price}</span>
          <span>Qty: {qty}</span>{" "}
        </div>

        <div className="action_buttons">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1612269239~hmac=2a68712fadabe940ed70bc36c727c94c"
            alt="plus"
            onClick={()=>this.props.onIncrease(this.props.product)}
          />
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612269286~hmac=fa40f4eda507e5df2fc4f4c54dcb8119"
            alt="minus"
            onClick={()=>this.props.onDecrease(this.props.product)}
          />

          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612269328~hmac=f0a56c4779f0ba080fc01576107d1190"
            alt="bin"
          />
        </div>
      </div>
    );
  }
}

export default CartItem;
