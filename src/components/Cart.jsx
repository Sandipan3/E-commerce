import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { applyTempUpdate, removeFromCart, updateTempQuantity } from '../features/ShopCart/cartSlice';

const Cart = () => {

  const {items, tempItems , total } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(removeFromCart(id));
  }

  const handleUpdateQuantity =(id , quantity ) =>{
    dispatch(updateTempQuantity({id , quantity}))
  }

  const handleApplyUpdates = (id) =>{
    // handleApplyUpdates() this updates all the items quantity in cart 
    // tempItems.forEach((item)=>{
    //   dispatch(applyTempUpdate(item.id))
    // })
    // so we use handleApplyUpdates(id) for specific updates 
    dispatch(applyTempUpdate(id))
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify({items,total}))
  },[items,total])

  return (
    <div className="cart-page-container">
      {(items.length === 0) ? <div className="cart-empty">
        <h3>Your cart is empty</h3>
        <button onClick={()=>navigate('/')}>Back to Home </button>
      </div> :
        <div className="cart-container">  
        <h2>
          Your Cart
        </h2>
        {items.map((item)=>(
          <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price : ${item.price.toFixed(2)}</p>
            <div>
              <input 
              type="number"
              min="1"  
              value={tempItems.find((tempItem)=> tempItem.id === item.id)?.quantity || item.quantity }
              onChange={(e)=>handleUpdateQuantity(item.id, parseInt(e.target.value))}/>
              <button onClick={()=>handleApplyUpdates(item.id)}>Update</button>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
        ))}
        <div className="cart-total">
          <p>Total : ${total.toFixed(2)}</p>
        </div>
        <button className="back-button" onClick={()=>navigate('/')}>Back to Shopping</button>
        </div>
      }
    </div>
  )
}

export default Cart