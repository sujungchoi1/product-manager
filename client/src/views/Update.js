import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton';

// eslint-disable-next-line
export default props => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    // getting access to the existing data and displaying
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}` )
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${props.id}/edit`, product)
            .then(res => {
                console.log(res)
                // navigate to the main page after updating the form
                navigate("/")
            })
            .catch(err=>console.log(err));
    }

    return (

        <div className="updatePage">
            <h1 className="updateHeader">Update a Product</h1>
            {loaded && (
                <>
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
            </>
            )}
            <h5><Link to='/'> Back to Main Page </Link></h5>
        </div>
    )
}
