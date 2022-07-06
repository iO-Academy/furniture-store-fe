import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {productsURL, currencySymbol} from "../../config"
import Product from "../../Organisms/Product";
import CurrencyContext from "../../Atoms/CurrencyContext";

export default function Products(props) {
    const params = useParams()

    const context = useContext(CurrencyContext)

    const [products, setProducts] = useState([])
    const [inStock, setInStock] = useState(false)

    useEffect(() => {
        fetch(productsURL + '?cat=' + params.catId + '&instockonly=' + Number(inStock) + '&currency=' + context.currency)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [params.catId, inStock, context.currency])

    const changeStockFilter = () => {
        setInStock(!inStock)
    }

    return (
        <>
            <div className="jumbotron mt-4">
                <h1 className="display-4">Category: {props.category}</h1>
                <p className="lead">For more information about any of the below products, click on the more button.</p>
            </div>
            <div className="row">
                <div className="col-6 mb-4">
                    <Link to="/"> Back </Link>
                </div>
                <div className="col-6 text-right">
                    <label>
                        In Stock Only
                        <input type="checkbox" className="ml-2" checked={inStock} onChange={changeStockFilter} />
                    </label>
                </div>
            </div>
            <div className="row">
                {products.map(product => <Product currency={currencySymbol[context.currency]} catId={params.catId} productId={product.id} price={product.price} stock={product.stock} color={product.color} />)}
            </div>
        </>
    );
}