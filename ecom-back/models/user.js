const mongoose = require('mongoose')
// to connect two  database and geting data and storing in another one
const {ObjectId}=mongoose.Schema;

const userSchema = new mongoose.Schema({
    // name:"abcdef"
    name:String,
    email:{
        type:String,
        required:true,
        index:true,
    },
    role:{
        type:String,
        default:"customer",
    },
    cart:{
        // [1,2,3]
        type:Array,
        default:[],
    },
    //wishlist
    //phone number
    address:String
},{timestamps:true})

module.exports= mongoose.model('User',userSchema)
