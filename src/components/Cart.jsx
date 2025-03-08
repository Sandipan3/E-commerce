import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../features/ShopCart/cartSlice';

const Cart = () => {

  const {items, tempItems , total } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(removeFromCart(id));
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify({items,total}))
  },[items,total])

  return (
    <div className="cart-page-container">
      <div className="cart-container">
        <h2>
          Your Cart
        </h2>
        {items.map((item)=>(
          <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price : ${item.price}</p>
            <div>
              <input 
              type="number"
              min="1"  
              value={tempItems.find((tempItem)=> tempItem.id === item.id)?.quantity || item.quantity }/>
              <button>Update</button>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
        ))}
        <div className="cart-total">
          <p>Total : ${total}</p>
        </div>
        <button className="back-button" onClick={()=>navigate('/')}>Back to Shopping</button>
      </div>
    </div>
  )
}

export default Cart