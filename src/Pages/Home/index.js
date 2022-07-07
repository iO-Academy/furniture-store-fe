import {useEffect, useState} from "react";
import Category from "../../Organisms/Categories";
import {categoriesURL} from "../../config"

export default function Home(props) {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        try {
            const response = await fetch(categoriesURL)
            const data = await response.json()
            setCategories(data.data)
        } catch(e) {
            setError('Unable to retrieve data')
        }
    }

    return (
        <>
            <div className="jumbotron mt-4">
                <h1 className="display-4">Furniture Categories</h1>
                <p className="lead">We have a wide range of products in the below categories,
                    start by selecting the kind of product you are looking for</p>
            </div>
            <div className="row">
                {
                    error &&
                    <div className="col-12"><div className="alert alert-danger">Error: {error}</div></div>
                }
                {categories.map(cat => <Category setCategory={props.setCategory} key={cat.id} name={cat.name} id={cat.id} products={cat.products} />)}
            </div>
        </>
    );
}