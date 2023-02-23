const Address=require("../models/AddressModel")
const satelize = require('satelize');

const postAddress= async(req,res)=>{

    try{

        const {name,addres,ip}=req.body

        satelize.satelize({ip:ip}, async(err, payload)=> {
            console.log('latitude',payload.latitude)
            console.log('longitude',payload.longitude);

            var address = {
                date:new Date(),
                address: addres,
                location: {
                    longitude:payload.longitude,
                    latitude: payload.latitude
                }
            }

            const data = await Address.create({
                name,address
            })
            await data.save();

            res.status(200).send({
                status: "success",
                data:data
            })
        })
    }
    catch(error){
        res.status(500).send({
            result:"Fail",
            message:"Internal Server Error"
        })
    }
}

module.exports=postAddress

