const express = require('express');
const bodyParser = require('body-parser');

const productsRouter = express.Router();
productsRouter.use(bodyParser.json());

productsRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, _next) =>{
    res.end('will send all the products to you!');
})
.post((req, res, _next) =>{
    res.end('will add the product: ' + req.body.name +" with details : " + req.body.description);
})
.put((req, res, _next) =>{
    res.statusCode = 403;
    res.end('PUT operation not allowed');
})
.delete((req, res, _next) =>{
    res.end('Deleting all the products!');
});

productsRouter.route('/:productId')
.get((req, res, _next) =>{
    res.end('will send the product details to you!' + req.params.productId);
})
.post((req, res, _next) =>{
    res.statusCode = 403;
    res.end('POST operation not allowed');
})
.put((req, res, _next) =>{
    res.end('will update the product details for :' + req.params.productId);
})
.delete((req, res, next) =>{
    res.end('Deleting the product :' + req.params.productId);
});

module.exports = productsRouter;
