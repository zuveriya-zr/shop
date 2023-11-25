const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {authChecking, adminCheck} =require('../middlewares/auth-m')
const {create} = require('../controllers/prod-c')



//create product
router.post('/product',authChecking, adminCheck,create)


 
module.exports = router