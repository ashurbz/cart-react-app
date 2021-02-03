import React from "react";
import "./CartItem.css";

 const CartItem = (props) => {

      const { price, qty, title, img } = props.product;
      const {onIncrease,onDecrease,onDeleteQuantity,product} = props;
  
      return (
        <div>
          <h2>Shopping Cart</h2>
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
              onClick={()=>onIncrease(product)}
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612269286~hmac=fa40f4eda507e5df2fc4f4c54dcb8119"
              alt="minus"
              onClick={()=>onDecrease(product)}
            />
  
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1612269328~hmac=f0a56c4779f0ba080fc01576107d1190"
              alt="bin"
              onClick={()=>onDeleteQuantity(product.id)}
            />
          </div>
        </div>
      );
    }


    export default CartItem;




    

    
  
































