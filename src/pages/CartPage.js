import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseProductCartQuantity,
  decreaseProductCartQuantity
} from '../store/actions/cartActions';
import { PRODUCTS_DATA } from '../data/dummy-data';

function CartPage() {

  const cart = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="header-title">shopping cart</h3>
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
                  <img src={productsData[0].image} />
                </div>
                <div className="cart-item_text-block">
                  <h4 className="cart-item_text-block-title">{item.title}</h4>
                  <p className="cart-item_text-block-description">{productsData[0].description}</p>
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
                  <button onClick={() => console.log("delete item id: " + item.id + ", item title: " + item.title)}>x</button>
                </div>
              </div>
            )
          })
        }
        <p>Total Value: ${totalPrice}</p>
      </div>
    </div>
  )
}

export default CartPage;