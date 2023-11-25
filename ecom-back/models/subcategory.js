const mongoose = require('mongoose')
// to connect two  database and geting data and storing in another one
const {ObjectId}=mongoose.Schema;

const subCatSchema = new mongoose.Schema({
    // cat ==> laptop 
    //sub cat ==> apple , hp, del
    name:{
        type:String,
        trim:true,
        required:'sub category name is required',
        minlength:[2, 'Too Short cat name'],
        maxlength:[20, 'Too Long cat name'],

    },
     // slug /category/lenovo-laptop  ==> LENOVO LAPTOP

     slug:{
        type:String,
        lowercase:true,
        unique:true,
        index:true,
    },
    parent:{
        type:ObjectId,
        ref:"Category",
        required:true
    }
   
},{timestamps:true})

module.exports= mongoose.model('SubCat',subCatSchema)
