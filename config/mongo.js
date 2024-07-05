const mongoose= require("mongoose");
const dotenv= require("dotenv").config()

exports.connectDB=async(req,res)=>{
    try{

        mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log("DB connected Sucessfully"))
        .catch((error)=>console.log(error))

    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}