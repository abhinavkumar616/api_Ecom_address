const mongoose=require("mongoose")

const AddressSchema=new mongoose.Schema({

    name:{
        type:String
    },
    address:[{
        address:{
            type:String
        },
        location:[{
            longitude:{
                type:String
            },
            latitude:{
                type:String
            }
        }],
        date:{
            type:Date
        }
    }]

    // address:{
    //     type:String
    // },
    // location:[{
    //     longitude:{
    //         type:String
    //     },
    //     latitude:{
    //         type:String
    //     }
    // }]

})

const Address=new mongoose.model("Address",AddressSchema)
module.exports=Address