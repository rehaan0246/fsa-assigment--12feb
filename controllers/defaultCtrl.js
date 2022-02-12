const mongoose= require("mongoose");
const config=require('../config/index')

const get=(req,res)=>{
    res.status(200);
    res.send("Product API");
}

const health = async (req,res) => {
    try{
await mongoose.connect(config.dbConStr);
        res.status(201).json({db : 'Up'});
    }
    catch(e){
        res.status(500);
        res.send('Internal Server Error')
    }
}

module.exports = { get ,health }