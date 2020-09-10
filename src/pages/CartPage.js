import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions/index';

function CartPage() {

  const totalPrice = useSelector(state => state.cart);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="container cart-page_container">
      <p>This is <b>Cart</b> page</p>
      {
        isLogged === true ? <p>Total price: {totalPrice}</p> : <p>User do not log in</p>
      }
      <button onClick={() => dispatch(increment(10, 20))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default CartPage;