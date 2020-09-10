import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';

function ProductItem(props) {
  return (
    <div className="grid-item">
      <div className="grid-item_content">
        <div className="products-page_txt-container">
          <h4 className="products-page_title">{props.title}</h4>
          <h4 className="products-page_price">Price: ${props.price}</h4>
        </div>
        <img className="products-page_img" src={props.image} />
        <p className="products-page_text">{props.description}</p>
        <ul className="products-page_ul">
          <li className="products-page_ul-li">
            <label className="products-page_ul-label">Ступінь обсмажування:</label>
            <p className="products-page_ul-p">{props.fryingDegree}</p>
          </li>
          <li className="products-page_ul-li">
            <label className="products-page_ul-label">Аромат:</label>
            <p className="products-page_ul-p">{props.aroma}</p>
          </li>
          <li className="products-page_ul-li">
            <label className="products-page_ul-label">Смак:</label>
            <p className="products-page_ul-p">{props.taste}</p>
          </li>
        </ul>
        <div className="products-page_btns">
          <button className="products-page_btn-view">View Details</button>
          <button className="products-page_btn-cart">To Cart</button>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  fryingDegree: PropTypes.string.isRequired,
  aroma: PropTypes.string.isRequired,
  taste: PropTypes.string.isRequired,
}

export default ProductItem;