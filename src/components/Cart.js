import React from "react";
import CartItem from './CartItem';

const Cart =(props)=> {
  
    const {products} = props;
    return (
      <div>
        {products.map((product) => {
          return <CartItem product={product} key={product.id}
          onIncrease={props.onIncrease} onDecrease={props.onDecrease}
          onDeleteQuantity ={props.onDeleteQuantity} />;
        })}
      </div>
    );
  
}

export default Cart;
