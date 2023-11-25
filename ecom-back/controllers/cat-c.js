const Category = require('../models/category')
const slugify = require('slugify')
const SubCat = require('../models/subcategory')
// CREATING CATEGORY 
exports.create = async (req, res) => {
    try{
//create new cat
const {name} =req.body

const cat= await new Category({name,slug:slugify(name)}).save()
console.log("new category created", cat)
res.json(cat)

    }
    catch(err){
        console.log(err)
        res.status(400).send("creating category failed..!!")
    }
}



// reading or getting single category
exports.read = async (req, res) => {
    // /category/apple-watch==>10
    const singleCat= await Category.findOne({slug:req.params.slug})

    res.json(singleCat)
}

// to list all category
exports.list = async (req, res) => {
    //lists of category  // 1  2  3 
    const allCat= await Category.find({}).sort({createdAt:-1})
    res.json(allCat)
}

// to update category
exports.update = async (req, res) => {
    const {name}= req.body
    try{
        // category name= lenovo Laptop  |  slug ==> category/lenovo-laptop
const updated= await Category.findOneAndUpdate({slug:req.params.slug},{name,slug:slugify(name)},{ new: true })
res.json(updated)
    }
    catch(err){
        console.log(err)
        res.status(400).send("updating category failed..!!")
    }
}

// to delete a category
exports.remove = async (req, res) => {
    try{
        //abc :abc
const deleted= await Category.findOneAndDelete({slug:req.params.slug})
res.json(deleted)
    }catch(err){
        console.log(err)
        res.status(400).send("Deletion of category failed..!!")
    }
}

//to get sub cat based on parent
exports.getSubs =async (req,res)=>{
 const result= await SubCat.find({parent:req.params._id})
    try{

    res.json(result)
    console.log("geting sub based on cat ==>",result)
}
catch(err){
       console.log(err)
       res.json({
        err:"Err in subs"
       })
    
    }

}