import React, { Component } from 'react'
import './Cart.css';


 class Cart extends Component {
     constructor(){
         super()
         this.state={
            price:9000,
            qty: 1,
            title:"Mobile"
         }
     }
    
     increaseQuantity=()=>{
         //form 1
        // this.setState({
        //     qty: this.state.qty +1
        // })
        this.setState((prevState)=>{
            return{
                qty: prevState.qty+1
            }
        })
     }

     decreaseQuantity=()=>{
         if(this.state.qty>0){
         this.setState({
             qty:this.state.qty -1 
         })}
     }

     

     
     

    render() {
     const {price,qty,title}= this.state;

        return (
            
            <div>
                <div className="container">
                <h1>Shopping Cart</h1>
                <div className="image_container">
                    <img className="image" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png" alt="mobile"/>
                </div>
                <div className="details_container">
                    
                        <h2>{title}</h2>
                       <span>Rs: {price}</span> 
                      <span>{qty}</span>  
                  
                </div>
                </div>
                <div className="action_buttons">
                <img src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1612200714~hmac=3510e427679116250bc145a47c2117e8" alt="plus" onClick={this.increaseQuantity}/>
                <img src ="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612200938~hmac=f505ad6c24e7e15a371d778cb0dc3366" alt="minus" onClick={this.decreaseQuantity}/>
                
                </div>
             </div>
        )
    }
}


export default Cart;