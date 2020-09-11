import React from 'react';
import './CartPage.css';
import { useSelector } from 'react-redux';
// import { increment, decrement } from '../store/actions/numberActions';

function CartPage() {

  const cart = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  console.log(cart);

  return (
    <div className="container cart-page_container">
      <p>This is <b>Cart</b> page.</p>
      {
        cart.map((item, index) => (
          <div key={index}>
            <p>Title: {item.title} | Quantity: {item.quantity} | ${item.sum}</p>
          </div>
        ))
      }

      <p>Total Cart Price: {totalPrice}</p>
    </div>
  )
}

export default CartPage;