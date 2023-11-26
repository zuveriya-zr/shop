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

