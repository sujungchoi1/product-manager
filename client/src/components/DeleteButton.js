import React, { useState } from 'react'
import axios from 'axios';

// eslint-disable-next-line
export default props => {
    // props coming from the parent component; ProductList.js
    const { productId, successCallback } = props;
    
    const deleteProduct = e => {

        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                successCallback(productId)
                console.log(res, "** Deleting a product")
            })
            .catch(err=>console.log("Error: ", err))    
    }
    return (
        <button className="btn btn-secondary" onClick={deleteProduct}>
            Delete
        </button>
    )
}

