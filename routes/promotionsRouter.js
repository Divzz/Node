const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.get((req, res, _next) =>{
    res.end('will send the promotions details to you!' + req.params.promoId);
})
.post((req, res, _next) =>{
    res.statusCode = 403;
    res.end('POST operation not allowed');
})
.put((req, res, _next) =>{
    res.end('will update the promotions details for :' + req.params.promoId);
})
.delete((req, res, _next) =>{
    res.end('Deleting the promotions :' + req.params.promoId);
});

module.exports = promotionsRouter;