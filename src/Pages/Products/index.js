import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {productsURL, currencySymbol} from "../../config"
import Product from "../../Organisms/Product";
import CurrencyContext from "../../Atoms/CurrencyContext";
import handleError from "../../utils/ErrorHandler";

export default function Products(props) {
    const params = useParams()

    const context = useContext(CurrencyContext)

    const [products, setProducts] = useState([])
    const [inStock, setInStock] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        getProducts()
    }, [params.catId, inStock, context.currency])

    const changeStockFilter = () => {
        setInStock(!inStock)
    }

    const getProducts = async () => {
        try {
            const response = await fetch(productsURL + '?cat=' + params.catId + '&instockonly=' + Number(inStock) + '&currency=' + context.currency)
            if (await handleError(response, setError)) {
                const data = await response.json()
                setProducts(data.data)
            }
        } catch(e) {
            setError('Unable to retrieve data')
        }
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
                {
                    error &&
                    <div className="col-12"><div className="alert alert-danger">Error: {error}</div></div>
                }
                {products.map(product => <Product key={product.id} currency={currencySymbol[context.currency]} catId={params.catId} productId={product.id} price={product.price} stock={product.stock} color={product.color} />)}
            </div>
        </>
    );
}