import React from 'react';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import ProductsPage from './pages/ProductsPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/news" exact component={NewsListPage} />
        <Route path="/news/:id" component={NewsDetailsPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" component={ProductsDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
