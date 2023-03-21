import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext';

export const ProductCard = ({product}) => {
  const { addToCart, cartList, removeFromCart} = useCart();
  const [isInCart, setIsInCart] = useState();

  const {id, name, price, image} = product;

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)

    if(productIsInCart){
      setIsInCart(true);
    }
    else{
      setIsInCart(false);
    }
  }, [cartList, id])
  

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className='name'>{name}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) :  (<button onClick={() => addToCart(product)}>Add To Cart</button>) }
      </div>
    </div>
  )
}
