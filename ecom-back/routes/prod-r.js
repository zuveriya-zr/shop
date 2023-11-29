const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {authChecking, adminCheck} =require('../middlewares/auth-m')
const {create,listAllProd,remove,read,update} = require('../controllers/prod-c')



//create product
router.post('/product',authChecking, adminCheck,create)
// 10 => count
router.get('/products/:count',listAllProd)
//single product
router.get('/product/:slug',read)
//to delete product
router.delete('/product/:slug',authChecking, adminCheck,remove)
//update product
router.put('/product/:slug',authChecking, adminCheck,update)


 
module.exports = router