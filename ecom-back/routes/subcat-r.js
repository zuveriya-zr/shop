const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {authChecking, adminCheck} =require('../middlewares/auth-m')
const {create, read, list, update,remove} = require('../controllers/subcat-c')
// CRUD ==> CREATE READ UPDATE DELETE LIST



//reading the data of a category
///category/apple  apple hp lenovo
router.get('/sub/:slug',read)


//list all the subcat
router.get('/subs',list)


//create cat
router.post('/sub',authChecking, adminCheck,create)

//update the subcat
router.put('/sub/:slug',authChecking, adminCheck,update)

// delete the cat
router.delete('/sub/:slug',authChecking, adminCheck,remove)

 
module.exports = router