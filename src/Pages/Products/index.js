import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productsURL} from "../../config"
import Product from "../../Organisms/Product";
import handleError from "../../utils/ErrorHandler";

export default function Products(props) {
    const params = useParams()
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getProducts()
    }, [params.catId])

    const getProducts = async () => {
        try {
            const response = await fetch(productsURL + '?cat=' + params.catId)
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
                <div className="col-12 mb-4">
                    <Link to="/"> Back </Link>
                </div>
            </div>
            <div className="row">
                {
                    error &&
                    <div className="col-12"><div className="alert alert-danger">Error: {error}</div></div>
                }
                {products.map(product => <Product key={product.id} catId={params.catId} productId={product.id} price={product.price} stock={product.stock} color={product.color} />)}
            </div>
        </>
    );
}