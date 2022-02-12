const express = require('express');
const router = express.Router();

const productCtrl=require('../controllers/productCtrl')


router.get('/products',productCtrl.getProducts);
router.post('/products', productCtrl.addProduct);

module.exports=router;