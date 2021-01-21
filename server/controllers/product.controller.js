const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
    message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.status(400).json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json( allProducts ))
        // .then(allProducts => res.json( {products: allProducts} ))
        .catch(err => res.json({ message: "Something went wrong", error: err}))
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => res.status(400).json(err))
}
