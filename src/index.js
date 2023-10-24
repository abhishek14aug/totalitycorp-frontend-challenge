import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';



import { Home, Product, Products, AboutPage, ContactPage, Cart, Checkout, PageNotFound } from "./pages"
import Success from './pages/Success';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-k4zvgqqj2yriscl6.us.auth0.com"
    clientId="kna2TDkYgXJeJlGfKuZs0vNrC67djJTs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
      </Auth0Provider>
    </Provider>
  </BrowserRouter>
);