const mongoose=require("mongoose")
require('dotenv');


async function getData(){
    try{
        await mongoose.connect("mongodb://localhost:27017/sdkDB")
        console.log("Database is Connected....");
    }
    catch(error){
        console.log("Something went wrong in database connection!!!!!");
    }
}

getData()

// const mongoose = require("mongoose")
// const connectDatabase = () => {

//     mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then((data) => { console.log(`Mongodb connected with server`) })
//         .catch((error)=>{
//             console.log(error);
//         })
// }

// module.exports = connectDatabase
