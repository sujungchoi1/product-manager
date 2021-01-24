import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

// eslint-disable-next-line
export default () => {
    const [ products, setProducts ] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                setProducts(res.data)
                setLoaded(true);
            })  
            .catch(err=>console.log("Error: ", err))     
    }, [])

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{
                console.log(res, "** New product created")
                //updating state after api call => re-render the page; show the new product created without having to refresh the page
                setProducts([...products, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  

    }

    const removeFromDom = productId => {
        setProducts(products.filter(prod => prod._id !== productId));
        console.log(products.filter(prod => prod._id !== productId));
    }
    

    return (
        <div className="mainForm">
            <h2>Product Manager</h2>

            {errors.map((err, index) => <p style={{"color": "red"}} key={index}> {err} </p>)}

            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} /> }
        </div>

    )
}