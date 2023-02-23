const mongoose=require("mongoose")

async function getData(){
    try{
        
        await mongoose.connect("mongodb://localhost:27017/address")
        console.log("Database is Connected....");
    }
    catch(error){
        console.log("Something went wrong in database connection!!!!!");
    }
}

getData()