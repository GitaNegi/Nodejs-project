
const express = require('express');
// create new router
const router = express.Router();

// create a JSON data array
let data = [
    { ProductId: 1, ProductName: 'Bottle',  ProductPrice: 100, createdOn: new Date() },
    {ProductId: 1, ProductName: 'vase',  ProductPrice: 200,  createdOn: new Date() },
    {ProductId: 1, ProductName: 'phone',  ProductPrice: 300, createdOn: new Date() },
   ];

router.get('/', function (req, res) {
    res.status(200).json(data);
});

module.exports = router;