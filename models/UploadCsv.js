const mongoose=require("mongoose")

const UploadCsvSchema=new mongoose.Schema({

    username:{
        type:String
    },

    document:{
        type:Array
    }
})

const UploadCsv=new mongoose.model("UploadCsv", UploadCsvSchema)
module.exports=UploadCsv