import { Link } from "react-router-dom";

export default function Category(props) {
    return (
        <div className="col-3">
            <div className="bg-light rounded p-3">
                <h3>{props.name}
                    <span className="badge badge-info float-right">{props.products}</span>
                </h3>
                <Link to={"/products/" + props.id} className="btn btn-primary">More >></Link>
            </div>
        </div>
    )
}