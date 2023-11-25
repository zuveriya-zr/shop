const SubCat = require('../models/subcategory')
const slugify = require('slugify')

// CREATING CATEGORY 
exports.create = async (req, res) => {
    try{
//create new cat
const {name,parent} =req.body

const subcat= await new SubCat({name,parent,slug:slugify(name)}).save()
console.log("new sub category created", subcat)
res.json(subcat)

    }
    catch(err){
        console.log(err)
        res.status(400).send("creating sub category failed..!!")
    }
}



// reading or getting single category
exports.read = async (req, res) => {
    // /category/apple-watch==>10
    const singleSubCat= await SubCat.findOne({slug:req.params.slug})

    res.json(singleSubCat)
}

// to list all category
exports.list = async (req, res) => {
    //lists of category  // 1  2  3 
    const allSubCat= await SubCat.find({}).sort({createdAt:-1})
    res.json(allSubCat)
}

// to update category
exports.update = async (req, res) => {
    const {name,parent}= req.body
    try{
        // category name= lenovo Laptop  |  slug ==> category/lenovo-laptop
const updated= await SubCat.findOneAndUpdate({slug:req.params.slug},{name,parent,slug:slugify(name)},{ new: true })
res.json(updated)
    }
    catch(err){
        console.log(err)
        res.status(400).send("updating sub category failed..!!")
    }
}

// to delete a category
exports.remove = async (req, res) => {
    try{
const deleted= await SubCat.findOneAndDelete({slug:req.params.slug})
res.json(deleted)
    }catch(err){
        console.log(err)
        res.status(400).send("Deletion of sub-category failed..!!")
    }
}