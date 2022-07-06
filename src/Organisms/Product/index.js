export default function Product(props) {
    return (
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="bg-light rounded p-3 mb-3">
                <h4>Price: &pound;{props.price}
                    <span className="badge badge-info float-right">{props.stock}</span>
                </h4>
                <p>Color: {props.color}</p>
            </div>
        </div>
    )
}