const AddressModel = require("../models/AddressModel")
const satelize = require('satelize');

const putAddressController = async (req, res) => {

    try {
        console.log("tryyyy");
        var data = await AddressModel.findOne({ _id: req.params._id })
        console.log("dataa", data);
        // console.log("adresss",data.address[1].address);

        if (data) {
            console.log("data", data);
            // data.name=req.body.name
            // data.address=req.body.address
            // data.longitude=req.body.longitude
            // data.latitude=req.body.latitude

            // await data.save()
            // res.send({
            //     result:"Success",
            //     data:data
            // })

            satelize.satelize({ ip: req.body.ip }, async (err, payload) => {
                // if used with 
                console.log('shdfnsl', payload.latitude)

                var z = {
                    // name:req.body.name,
                    date:new Date(),
                    address: req.body.address,
                    location: {
                        longitude: payload.longitude,
                        latitude: payload.latitude
                    }
                }
                
                // await AddressModel.updateOne({_id:req.params._id}, {$pull: {address:{ $in: data.address}}});
                // var users = await AddressModel.updateOne({ _id: req.params._id }, { $push: { address: z } });


                // AddressModel.updateMany({_id: req.params._id},
                //  {$set: {"address.$[el].address": req.body.address}},{arrayFilters: [{"el.score": 8}]})

                await AddressModel.updateMany({_id: req.params._id},
                {$push:{address:{$each:[z],$sort:{date: -1},$slice:5}}})

                // below code for updates....
                // var users= await AddressModel.updateOne({_id:req.params._id}, {$set: { address: z }})
                console.log("userss",data);
                // console.log("after push data",x);
                res.status(201).send({
                    result: "Success"
                    // data: users
                })


            });

        }
        else {
            res.status(401).send({
                result: "Fail",
                message: "Id not found",
                error: error.message
            })
        }
    }
    catch (error) {
        res.status(500).send({
            result: "Fail",
            message: "Internal server error",
            error: error.message
        })
    }

}

module.exports = putAddressController