import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import {useState} from "react";

export default function App() {

    const [categoryName, setCategoryName] = useState('')

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row bg-dark text-light">
                    <div className="col-12">
                        <h1>
                            <Link to={"/"} className="text-light">Furniture Store</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home setCategory={setCategoryName} />} />
                    <Route path="/products/:catId" element={<Products category={categoryName} />} />
                    <Route path="/products/:catId/:productId" element={<Product category={categoryName} />} />
                </Routes>
                <footer className="border-top mt-5 py-3">
                    <p>&copy; Copyright iO Academy 2022</p>
                </footer>
            </div>
        </BrowserRouter>
    )
}