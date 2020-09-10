import React from 'react';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/news" exact component={NewsListPage} />
          <Route path="/news/:id" component={NewsDetailsPage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
