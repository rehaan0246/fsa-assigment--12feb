const productRepository = require('../repository/productRepository');

const getProducts = async (req, res) => {
    try {
        const products = await productRepository.getProducts();

        res.status(200);
        res.json(products);
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
}


const addProduct = async (req, res) => {
    try {
        const data = req.body;
        data.createdAt = Date.now();
        await productRepository.add(data);
        res.status(201);
        res.send();
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
};

const productUpdate = async (req, res) => {
    try {
        const productId = req.params.productId;
        await productRepository.productUpdate(productId, req.body);

        res.status(204);
        res.send();
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
}
    
module.exports = { addProduct, productUpdate, getProducts };