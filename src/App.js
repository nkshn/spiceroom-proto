import React from 'react';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
