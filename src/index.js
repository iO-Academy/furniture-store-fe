import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="container-fluid">
          <div className="row bg-dark text-light">
              <div className="col-12">
                  <h1>Furniture Store</h1>
              </div>
          </div>
      </div>
      <div className="container">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products/:catId" element={<Products />} />
                  <Route path="/products/:catId/:productId" element={<Product />} />
              </Routes>
          </BrowserRouter>
          <footer className="border-top mt-5 py-3">
              <p>&copy; Copyright iO Academy 2022</p>
          </footer>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
