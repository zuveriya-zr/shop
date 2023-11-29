const Product = require('../models/product')
const slugify = require('slugify')

// CREATING CATEGORY 
exports.create = async (req, res) => {
    try{
//create new product
console.log("frontend req===>",req.body)
// all details product but not slug
req.body.slug = slugify(req.body.title)

const newProd= await new Product(req.body).save()
console.log("new Product created", newProd)
res.json(newProd)

    }
    catch(err){
        console.log(err)
        res.status(400).send("creating Product failed..!!")
    }
}


// list all the products
exports.listAllProd = async(req,res) =>{
    const products= await Product.find({})
    .limit(parseInt(req.params.count))
    .populate('category')
    .populate('subs')
    .sort([['createdAt','desc']])

    res.json(products)
}


//remove function for product

exports.remove = async(req,res)=>{
    try{
        const deleted= await Product.findOneAndDelete({
            slug:req.params.slug,
        })
        res.json(deleted)
    }
    catch(err){
        console.log(err)
        return res.status(400).send("Product delete failed..!")
    }
}

//get single product
exports.read = async(req,res)=>{
const product = await Product.findOne({slug:req.params.slug})
.populate('category')
.populate('subs')
res.json(product)
console.log("single Prod==>",product)
}

// update the product
exports.update = async (req, res) => {
   
    try{
       if(req.body.title){
        req.body.slug = slugify(req.body.title)

       }
       const updated= await Product.findOneAndUpdate({
        slug:req.params.slug }, req.body , {new:true})
        res.json(updated)
    }
    catch(err){
        console.log(err)
        res.status(400).send("updating product failed..!!")
    }
}


