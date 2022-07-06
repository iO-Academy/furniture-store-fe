import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import {useState} from "react";
import UnitButton from "./Atoms/UnitButton";
import UnitContext from "./Atoms/UnitContext";

export default function App() {

    const [categoryName, setCategoryName] = useState('')
    const [measureUnit, setMeasureUnit] = useState('mm')

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row bg-dark text-light">
                    <div className="col-6">
                        <h1>
                            <Link to={"/"} className="text-light">Furniture Store</Link>
                        </h1>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <div className="btn-group btn-group-sm" role="group">
                            <UnitButton setActiveUnit={setMeasureUnit} activeUnit={measureUnit} unit="mm" />
                            <UnitButton setActiveUnit={setMeasureUnit} activeUnit={measureUnit} unit="cm" />
                            <UnitButton setActiveUnit={setMeasureUnit} activeUnit={measureUnit} unit="in" />
                            <UnitButton setActiveUnit={setMeasureUnit} activeUnit={measureUnit} unit="ft" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <UnitContext.Provider value={{unit: measureUnit}}>
                    <Routes>
                            <Route path="/" element={<Home setCategory={setCategoryName} />} />
                            <Route path="/products/:catId" element={<Products category={categoryName} />} />
                            <Route path="/products/:catId/:productId" element={<Product category={categoryName} />} />
                    </Routes>
                </UnitContext.Provider>
                <footer className="border-top mt-5 py-3">
                    <p>&copy; Copyright iO Academy 2022</p>
                </footer>
            </div>
        </BrowserRouter>
    )
}