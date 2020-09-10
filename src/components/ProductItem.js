import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from './Label';
import './ProductItem.css';

function ProductItem(props) {
  return (
    <div className="grid-item">
      <div className="grid-item_content">
        <div className="products-page_txt-container">
          <div className="products-page_title-div">
            <Label text="Назва:" />
            <h4 className="products-page_title">{props.title}</h4>
          </div>
          <div className="products-page_price-div">
            <Label text="Ціна:" />
            <h4 className="products-page_price">${props.price}</h4>
          </div>
        </div>
        <img className="products-page_img" src={props.image} alt="description" />
        <p className="products-page_text">{props.description}</p>
        <ul className="products-page_ul">
          <li className="products-page_ul-li">
            <Label text="Ступінь обсмажування:" />
            <p className="products-page_ul-p">{props.fryingDegree}</p>
          </li>
          <li className="products-page_ul-li">
            <Label text="Аромат:" />
            <p className="products-page_ul-p">{props.aroma}</p>
          </li>
          <li className="products-page_ul-li">
            <Label text="Смак:" />
            <p className="products-page_ul-p">{props.taste}</p>
          </li>
        </ul>
        <div className="products-page_btns">
          <Link to={`/products/${props.id}`}><button className="products-page_btn-view">View Details</button></Link>
          <button className="products-page_btn-cart">To Cart</button>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  fryingDegree: PropTypes.string.isRequired,
  aroma: PropTypes.string.isRequired,
  taste: PropTypes.string.isRequired,
}

export default ProductItem;