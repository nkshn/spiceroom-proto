import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-links_title" to="/">
        <p className="nav-logo">The Spiceroom</p>
      </Link>
      <ul className="nav-links">
        <Link className="nav-links_title" to="/news"><li>News</li></Link>
        <Link className="nav-links_title" to="/products"><li>Products</li></Link>
        <Link className="nav-links_title" to="/cart"><li>Cart</li></Link>
      </ul>
    </nav>
  )
}
