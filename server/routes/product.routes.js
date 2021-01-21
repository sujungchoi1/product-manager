const ProductController = require('../controllers/product.controller');

// put the most specific route first
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/:id/edit', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);

}