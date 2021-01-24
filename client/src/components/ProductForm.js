import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

// eslint-disable-next-line
export default (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        //creating onSubmit methond that takes in title, price, desc as an object
        onSubmitProp({title, price, description});
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <form className="formGroup" onSubmit={onSubmitHandler}>
                <div className="form-group row">
                    <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="title" 
                        onChange = {(e)=>setTitle(e.target.value)} 
                        value={title}
                        className="form-control" id="title" placeholder="Title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        onChange = {(e)=>setPrice(e.target.value)} 
                        value={price}
                        className="form-control" id="price" placeholder="Price" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        onChange = {(e)=>setDescription(e.target.value)} 
                        value={description}
                        className="form-control" id="desc" placeholder="Description" />
                    </div>
                </div>
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Create</button>
                    </div>
        </form>
    )
}