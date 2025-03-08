import React, { useEffect} from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ShopCart/productSlice';
import { addtoCart } from '../features/ShopCart/cartSlice';

const ProductList = () => {

  const dispatch = useDispatch();

  const {items , status } = useSelector((state) => state.products);

  useEffect(()=>{
    if( status === 'idle' )   dispatch(fetchProducts())
  },[status])

  if(status === 'loading') return <p>Loading...</p>
  if(status === 'error') return <p>Failed to load products! Please try again.</p>


  return (
    <>
    <Navbar />
    <div className="product-list">
        {items.map((item) =>(
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{ (item.title.length > 20 ) ?
              `${item.title.slice(0,20)}...`: item.title}</h2>
              <p>Price : ${item.price}</p>
              <button onClick={()=>dispatch(addtoCart(item))}>Add to Cart</button>
            </div>
          ))}
    </div>
    </>
  )
}

export default ProductList