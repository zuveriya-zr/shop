const express=require("express")
//handle routing part with help of express
const router = express.Router()
const {createUpdateUser, currentUser} = require('../controllers/auth-c')
const {authChecking, adminCheck} =require('../middlewares/auth-m')


router.post('/create-update-user',authChecking, createUpdateUser)
router.post('/current-user',authChecking, currentUser)
router.post('/admin-user',authChecking,adminCheck, currentUser)

 
module.exports = router