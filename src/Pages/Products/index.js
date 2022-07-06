import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productsURL} from "../../config"
import Product from "../../Organisms/Product";

export default function Products(props) {
    const params = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(productsURL + '?cat=' + params.catId)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

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
                {products.map(product => <Product price={product.price} stock={product.stock} color={product.color} />)}
            </div>
        </>
    );
}