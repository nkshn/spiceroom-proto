import React from 'react';
import './ProductsDetailsPage.css';
import { PRODUCTS_DATA } from '../data/dummy-data';
import RedirectingTo from "../components/RedirectingTo";
import Label from "../components/Label";

function ProductsDetailsPage({ match }) {

  const productData = PRODUCTS_DATA.find(item => item.id === parseInt(match.params.id));

  return (
    <div className="container">
      <RedirectingTo linkTo="/products" />
      <div className="productsDetails-page_container">
        <img src={productData.image} className="productsDetails-page_img" alt="description" />
        <div className="productsDetails-page_text-container">
          <div className="productsDetails-page_title-div">
            <Label text="Назва:" />
            <h4 className="productsDetails-page_title">{productData.title}</h4>
          </div>
          <div className="productsDetails-page_price-div">
            <Label text="Ціна:" />
            <h4 className="productsDetails-page_price">${productData.price}</h4>
          </div>
        </div>
        <div className="productsDetails-page_description-div">
          <Label text="Опис:" />
          <h4 className="productsDetails-page_description">{productData.description}</h4>
        </div>
        <h4 className="productsDetails-page_description">Характеристики:</h4>
        <ul className="productsDetails-page_ul">
          <li className="productsDetails-page_li">
            <Label text="Ступінь обсмажування:" />
            <p className="productsDetails-page_p">{productData.fryingDegree}</p>
          </li>
          <li className="productsDetails-page_li">
            <Label text="Аромат:" />
            <p className="productsDetails-page_p">{productData.aroma}</p>
          </li>
          <li className="productsDetails-page_li">
            <Label text="Смак:" />
            <p className="productsDetails-page_p">{productData.taste}</p>
          </li>
        </ul>
        <button className="productsDetails-page_btn">Buy</button>
      </div>
    </div>
  )
}

export default ProductsDetailsPage;