import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

// eslint-disable-next-line
export default props => {
    // for GET request
    const [product, setProduct] = useState({});
    // for DELETE request ([] to use .filter)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <div className="detailView">
            <h1 style={{"marginBottom":"20px"}}>{product.title}</h1>
            <h4>Price: ${product.price}</h4>
            <h4>Description: {product.description}</h4>
            <div className="edit_delete">
                <h5><Link to={"/" + product._id + "/edit"}>EDIT</Link></h5>

                <DeleteButton className="deleteOnDetail" productId={product._id} successCallback={() => navigate("/")} />
            
            </div>

            <h5><Link to='/'> Back to Main Page </Link></h5>
        </div>
    )
}
