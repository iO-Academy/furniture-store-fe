import {useEffect, useState} from "react";
import Category from "../../Organisms/Categories";
import {categoriesURL} from "../../config"

export default function Home(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(categoriesURL)
            .then(response => response.json())
            .then(data => setCategories(data.data))
    }, [])

    return (
        <>
            <div className="jumbotron mt-4">
                <h1 className="display-4">Furniture Categories</h1>
                <p className="lead">We have a wide range of products in the below categories,
                    start by selecting the kind of product you are looking for</p>
            </div>
            <div className="row">
                {categories.map(cat => <Category setCategory={props.setCategory} name={cat.name} id={cat.id} products={cat.products} />)}
            </div>
        </>
    );
}