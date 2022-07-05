import { Link } from "react-router-dom";

export default function Category(props) {
    return (
        <div className="col-3 mb-4">
            <div className="bg-light rounded p-3 mb-3">
                <h3>{props.name}
                    <span className="badge badge-info float-right">{props.products}</span>
                </h3>
            </div>
        </div>
    )
}