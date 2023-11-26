const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {authChecking, adminCheck} =require('../middlewares/auth-m')
const {upload,remove} = require('../controllers/cloud-c')



// upload image in cloudinary
router.post('/uploadimages',authChecking, adminCheck,upload)
// delete image from cloudinary
router.post('/removeimage',authChecking, adminCheck,remove)


 
module.exports = router