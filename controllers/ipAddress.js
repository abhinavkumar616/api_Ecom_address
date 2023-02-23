const express=require("express")

const satelize = require('satelize');

const ipAddress=async(req,res)=>{

    satelize.satelize({ip:'115.246.79.54'}, function(err, payload) {
        // if used with 
        console.log('shdfnsl',payload.latitude)
        res.send(payload);
        // res.json...
      });

}   

module.exports=ipAddress