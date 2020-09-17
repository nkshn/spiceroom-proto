import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseProductCartQuantity,
  decreaseProductCartQuantity,
  deleteProductFromCart,
  clearCart
} from '../store/actions/cartActions';
import { PRODUCTS_DATA } from '../data/dummy-data';

function CartPage() {

  const cart = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <p className="header-title">shopping cart</p>
      <div className="cart-item_totalPrice-block">
        <p className="cart-item_totalPrice-text">Total Value: <b>${totalPrice}</b></p>
        <button className="cart-item_totalPrice-btn" onClick={() => dispatch(clearCart())}>clear cart</button>
      </div>
      <div className="cart-page_grid">
        {
          cart.map((item, index) => {
            let productsData = PRODUCTS_DATA.filter(
              itemProducts_Data => itemProducts_Data.id === item.id
            );
            /*
             * for Outputing Value of Key of ProductsData
             * you need to write -> productsData[0].key
             * because filter function returns an array with object
             * so, productsData.key -> will now work!
             */
            return (
              <div key={index} className="cart-item_container">
                <div className="cart-item_img-block">
                  <img src={productsData[0].image} alt="description" />
                </div>
                <div className="cart-item_text-block">
                  <h4 className="cart-item_text-block-title">{item.title}</h4>
                  <p className="cart-item_text-block-description">{productsData[0].description}</p>
                </div>
                <div className="cart-item_quantity-block">
                  <button className="cart-item_quantity-button quantity-decrease"
                    onClick={() =>
                      dispatch(decreaseProductCartQuantity(item.id, item.price))
                    }>-</button>
                  <p className="cart-item_quantity-button-text">{item.quantity}</p>
                  <button className="cart-item_quantity-button quantity-increase"
                    onClick={() =>
                      dispatch(increaseProductCartQuantity(item.id, item.price))
                    }>+</button>
                </div>
                <div className="cart-item_pricing-block">
                  <p className="cart-item_pricing-block-price">${item.price}</p>
                  <p className="cart-item_pricing-block-sum">sum: ${item.sum}</p>
                </div>
                <div className="cart-item_clear-block">
                  <button onClick={() =>
                    dispatch(deleteProductFromCart(item.id, item.sum))
                  }>x</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartPage;