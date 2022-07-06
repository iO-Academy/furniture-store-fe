import {Link} from "react-router-dom";
import {currencySymbol} from "../../config";

export default function Product(props) {
    return (
        <div className="col-3">
            <div className="bg-light rounded p-3 mb-3">
                <h5>Price: <span dangerouslySetInnerHTML={{__html: props.currency}}></span>{props.price}
                    <span className="badge badge-info float-right">{props.stock}</span>
                </h5>
                <p>Color: {props.color}</p>
                <Link to={"/products/" + props.catId + '/' + props.productId} className="btn btn-primary">More >></Link>
            </div>
        </div>
    )
}