import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productURL} from "../../config"

export default function Product(props) {
    const params = useParams()
    const [product, setProduct] = useState([])
    const [relatedProduct, setRelatedProduct] = useState(false)

    useEffect(() => {
        getProduct(params.productId)
    }, [])

    const getProduct = (id) => {
        fetch(productURL + '?id=' + id)
            .then(response => response.json())
            .then(data => {
                setProduct(data.data)
                if (!isNaN(data.data.related)) {
                    getRelatedProduct(data.data.related)
                }
            })
    }

    const getRelatedProduct = (id) => {
        fetch(productURL + '?id=' + id)
            .then(response => response.json())
            .then(data => setRelatedProduct(data.data))
    }

    return (
        <>
            <div className="jumbotron mt-4">
                <h1 className="display-4">{props.category}</h1>
                <p className="lead">If this is not the right product for you, use the back button below to see our wide selection of other products.</p>
            </div>
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={"/products/" + params.catId}> Back </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="border rounded p-4 mb-4">
                        <span className="badge badge-info float-right">Stock: {product.stock}</span>
                        <h1>{product.color} {props.category} - &pound;{product.price}</h1>
                        <h3>Dimensions</h3>
                        <p>Width: {product.width}mm</p>
                        <p>Height: {product.height}mm</p>
                        <p>Depth: {product.depth}mm</p>
                    </div>

                    {relatedProduct &&
                        <div className="border rounded p-4 mb-4">
                            <h4 className="border-bottom pb-2">Similar product</h4>
                            <span className="badge badge-info float-right">Stock: {relatedProduct.stock}</span>
                            <h5>&pound;{relatedProduct.price}</h5>
                            <Link className="btn btn-primary float-right" to={"/products/" + relatedProduct.categoryId + '/' + product.related}>More >></Link>
                            <p>Color: {relatedProduct.color}</p>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}