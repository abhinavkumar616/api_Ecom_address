const AddressModel = require("../models/AddressModel")
const satelize = require('satelize');

const addAddressController = async (req, res) => {

    try {
        var data = await AddressModel.findOne({ _id: req.params._id })
        // var y=req.body.address

        // console.log("body data",y);
        if (data) {
           

            satelize.satelize({ip:req.body.ip}, async(err, payload)=> {
                // if used with 
                console.log('shdfnsl',payload.latitude)

                var z = {
                    date:new Date(),
                    address: req.body.address,
                    location: {
                        longitude:payload.longitude,
                        latitude: payload.latitude
                    }
                }
     
                //    AddressModel.update({name:"ashwani"}, {$push: {address: {address: y}}});
                var users = await AddressModel.updateOne({ _id: req.params._id }, { $push: { address: z } });
                console.log("userss");
                // console.log("after push data",x);
                res.status(201).send({
                    result: "Success",
                    data: users
                })

                
                // res.send(payload);
                // res.json...
              });
            

           
        }
        else{
            res.send({
                result:"fail",
                error:error.message
            })
        }
        // res.send(data) 


        // console.log("zzzzz", z)

    }
    catch (error) {
        res.status(500).send({
            result: "Fail",
            error: error.message
        })
    }

}

module.exports = addAddressController