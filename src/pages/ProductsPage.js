import React from 'react';
import ProductItem from '../components/ProductItem';
import './ProductsPage.css';
import { PRODUCTS_DATA } from '../data/dummy-data';

function ProductsPage() {

  const productsData = PRODUCTS_DATA;

  return (
    <div className="container products-page_container">
      <p className="header-title">Products</p>
      <div className="grid">
        {
          productsData.map(item => {
            return (
              <ProductItem
                key={item.id}
                product={item}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductsPage;