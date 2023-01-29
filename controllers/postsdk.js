const express = require("express")
const UploadCsv = require("../models/UploadCsv")
const basicAuth = require("../middleware/basicAuth")
var csv=require("csvtojson")
let fs=require("fs");
const router=require("../routes/sdkroutes")


const postsdk = async (req, res) => {

    try{
        const username = req.params.username 
        const data = await UploadCsv.findOne({username})

        if(!data){
            res.send("username is invalid")
            console.log("user not found");
        }
        else{
            console.log("user found");
            let userData=[]
            csv()
            .fromFile(req.file.path)
            .then( async(response)=>{
                // console.log(response);
               
                for(let i=0;i<response.length;i++){
                    userData.push({
                        document:response[i].deviceId 
                    })
                }
                console.log("then condition",userData);
                // let x=parseInt(Object.values(userData))
                // console.log("xxxxxxxxxx",Object.values(userData));

                // var users = await UploadCsv.updateOne({username: username}, {$push: {document: {$each: x}}})
                // console.log("aaaaaa",parseInt(Object.values(userData.deviceId)));
                res.send("done")
            })
            // console.log("outside loop",userData);
            // res.send(data)
        }
    } 
    catch(error){
        console.log(error);
        res.status(500).send({
            result:"Fail",
            message:"error"
        })
    }

}


module.exports = postsdk