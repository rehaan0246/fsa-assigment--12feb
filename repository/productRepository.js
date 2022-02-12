const ProductModel = require('../models/productModel');

const addProduct = (data) => {
    const product = new ProductModel(data);
    return product.save(); 
};

const productUpdate = (productId, data) => {
    const { updatedDate } = data;
    return ProductModel.updateOne({ productId }, {
        $set: {
            
            updatedDate: Date.now()
        }
    });
};

const getProducts = () => {
    return ProductModel.find();
}

module.exports = { addProduct,getProducts,productUpdate };