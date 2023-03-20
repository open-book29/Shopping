import React from 'react'


export const CartCard = ({product}) => {
  const {name, price, image} = product;

  return (
    <div className="cartCard">
      <img src={image} alt="" />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  )
}
