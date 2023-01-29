const express=require("express")
require("./dbConnect")

const sdkroutes=require("./routes/sdkroutes")
const app=express()
app.use(express.json())


app.use("/api",sdkroutes)

app.listen(8000,()=>{
    console.log("Server is Connecting on 8000 PORT.....");
})
