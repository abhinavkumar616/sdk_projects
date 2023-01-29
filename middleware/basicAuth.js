const auth=require("basic-auth")
const basicAuth=async(req,res,next)=>{
    console.log("middleWare:Basic AUTH");

    const user=await auth(req)

    const username ="admin"
    const password ="!@#$%qwerty1290!"

    try{
        if(user.name==username && user.pass==password){  
            console.log("You are Authorized to Access BasicAuthetication");
            next()
            console.log("user");
        }
        else{
            console.log("Not Authorized");
            res.status(401).send({
                message:"Not Authorized",
                // error:error.message
            })
        }
    }
    catch(error){
        res.status(500).json({
            result:"Internal server error",
            error:error.message
        })
    }
}

module.exports=basicAuth