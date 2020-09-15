import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from './Badge';

export default function Nav() {
  const cartItemsLength = useSelector(state => state.cart.products)
  // 
  return (
    <nav className="nav">
      <Link className="nav-links_title" to="/">
        <p className="nav-logo">The Spiceroom</p>
      </Link>
      <ul className="nav-links">
        <Link className="nav-links_title" to="/news"><li>News</li></Link>
        <Link className="nav-links_title" to="/products"><li>Products</li></Link>
        <Link className="nav-links_title" to="/cart">
          <li className="nav-links_title-li">
            Cart <Badge number={cartItemsLength.length} />
          </li>
        </Link>
      </ul>
    </nav>
  )
}