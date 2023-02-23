const AddressModel = require("../models/AddressModel")

const deleteAddressController = async (req, res) => {

    try {
        var data = await AddressModel.findOne({ _id: req.params._id })
        console.log("data", data);
        if (data) {
            // await data.delete()
            // res.status(200).send({
            //     result: "Success",
            //     message: "Data Deleted Successfully"
            // })

            var users = await AddressModel.updateOne({ _id: req.params._id }, { $pull: { address: { $in: data.address } } })
            res.status(200).send({
                result: "Success",
                data: users
            })

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
        console.log("catch errors", error);
        res.status(400).send({
            result: "Fail",
            message: "No data found",
            error: error.message
        })
    }

}

module.exports = deleteAddressController