const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    // name:"applewatch   HP h  "
    name:{
        type:String,
        trim:true,
        required:'category name is required',
        minlength:[2, 'Too Short cat name'],
        maxlength:[20, 'Too Long cat name'],
       

    },
     // slug /category/lenovo-laptop  ==> LENOVO LAPTOP
     slug:{
        type:String,
        lowercase:true,
        unique:true,
        index:true,
    }
   
},{timestamps:true})

module.exports= mongoose.model('Category',categorySchema)
