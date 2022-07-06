import {Link} from "react-router-dom";

export default function Product(props) {
    return (
        <div className="col-3">
            <div className="bg-light rounded p-3 mb-3">
                <h4>Price: &pound;{props.price}
                    <span className="badge badge-info float-right">{props.stock}</span>
                </h4>
                <p>Color: {props.color}</p>
                <Link to={"/products/" + props.catId + '/' + props.productId} className="btn btn-primary">More >></Link>
            </div>
        </div>
    )
}