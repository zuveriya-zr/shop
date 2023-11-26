const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {authChecking, adminCheck} =require('../middlewares/auth-m')
const {create, read, list, update,remove,getSubs} = require('../controllers/cat-c')
// CRUD ==> CREATE READ UPDATE DELETE LIST



//reading the data of a category
///category/apple  apple hp lenovo
router.get('/category/:slug',read)


//list all the category
router.get('/categories',list)

//get sub cat based on parent cat
router.get('/category/subs/:_id',getSubs)
 
//create cat
router.post('/category',authChecking, adminCheck,create)

//update the category
router.put('/category/:slug',authChecking, adminCheck,update)

// delete the cat
router.delete('/category/:slug',authChecking, adminCheck,remove)


module.exports = router