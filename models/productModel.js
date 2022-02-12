const mongoose = require('mongoose');

const productModel = mongoose.model('product',{
    //id: uniqueId, brand: ‘Apple’, price: 600, inStock:true, 
    //createdDate: ’10-02-2022’ updatedDate: ’10-02-2022
    productId :{
        type:'String',
        unique:true,
    required : [true, 'Product Id is mandatory']  
    },
    brand: {
        type:'String',
        minLength: [3, 'Min. 3 characters'],
        maxLength: [1, 'Max 100 characters'],
        required : [true, 'Brand name is mandatory']  

    },
    price:{
        type:'Number',

    },
    inStock: { type: Boolean, default: 1 },
    createdDate: Date,
    updatedDate: { type: Date, default: Date.now() }

})

module.exports= productModel;