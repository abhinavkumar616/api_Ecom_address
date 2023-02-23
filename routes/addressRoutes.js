const express=require('express')

const postAddress = require("../controllers/postAddressController")
const addAddressController=require("../controllers/addAddressController")
const deleteAddressController=require("../controllers/deleteAddressController")
const putAddressController=require("../controllers/putAddressController")
const ipAddress = require('../controllers/ipAddress')


const router =express.Router()


router.post("/address",postAddress)
router.post("/addAddress/:_id",addAddressController)
router.post("/deleteAddress/:_id",deleteAddressController)
router.put("/editAddress/:_id",putAddressController)
router.post("/ipAddress",ipAddress)


module.exports=router