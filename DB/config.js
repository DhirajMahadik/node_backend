const mongoose = require('mongoose');

const Connect = async () => {
   await mongoose.connect("mongodb://localhost:27017/demo");
}

module.exports = Connect;

   //    const ProductSchema = new mongoose.Schema({

   //     name:String,
   //     price : Number

   //    });
   //    const ProductsModel = mongoose.model('products', ProductSchema)
   //    let data  = new ProductsModel({name:"Dell 3578", price:45000});
   //    let result = await data.save();
   //    console.log(result)




// module.exports = getData;

