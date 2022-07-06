import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productURL} from "../../config"

export default function Product() {
    const params = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(productURL)
            .then(response => response.json())
            .then(data => setProduct(data.data))
    }, [])

    return (
        <>
            <div className="jumbotron mt-4">
                <h1 className="display-4">Category: </h1>
                <p className="lead">For more information about any of the below products, click on the more button.</p>
            </div>
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={"/products/" + params.catId}> Back </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 border rounded p-4">
                    <h1>&pound;{product.price}</h1>

                </div>
            </div>
        </>
    );
}