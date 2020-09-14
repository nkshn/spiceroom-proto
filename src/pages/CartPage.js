import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseProductCartQuantity, decreaseProductCartQuantity } from '../store/actions/cartActions';

function CartPage() {

  const cart = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="header-title">shopping cart</h3>
      <div className="cart-page_grid">
        {
          cart.map((item, index) => (
            <div key={index} className="cart-item_container">
              <div className="cart-item_img-block">
                <img src="https://via.placeholder.com/150/24f355" />
              </div>
              <div className="cart-item_text-block">
                <h4 className="cart-item_text-block-title">{item.title}</h4>
                <p className="cart-item_text-block-description">description</p>
              </div>
              <div className="cart-item_quantity-block">
                <button className="cart-item_quantity-button quantity-decrease" onClick={() => dispatch(decreaseProductCartQuantity(item.id, item.price))}>-</button>
                <p className="cart-item_quantity-button-text">{item.quantity}</p>
                <button className="cart-item_quantity-button quantity-increase" onClick={() => dispatch(increaseProductCartQuantity(item.id, item.price))}>+</button>
              </div>
              <div className="cart-item_price-block">
                <p>${item.sum}</p>
              </div>
              <div className="cart-item_clear-block">
                <button>x</button>
              </div>
            </div>
          ))
        }
        <p>Total Value: ${totalPrice}</p>
      </div>
    </div>
  )
}

export default CartPage;