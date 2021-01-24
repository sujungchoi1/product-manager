import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

// eslint-disable-next-line
export default (props) => {

    return (
        <div className="displayAll">

            <h1>All Products:</h1>
            {props.products.map((value, idx)=>{
                return <h4 className="productTitle" key={idx}> 
                    <Link to={`/${value._id}`}> {value.title} </Link>

                    <Link to={`/${value._id}/edit`}>
                     <span>Edit</span>
                    </Link> 
                    
                        {/* successCallback={props.removeFromDom} - passing down the function as a prop instead of invoking the function */}
                    <DeleteButton productId={value._id} successCallback={props.removeFromDom}/>

                    </h4>
            })}

        </div>
    )
}