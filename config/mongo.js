const mongoose= require("mongoose");

exports.connectDB=async(req,res)=>{
    try{

        mongoose.connect("mongodb+srv://ecell:haO5O3k7ims3e8RN@ecellietdavv.vkcwuoe.mongodb.net/innovision")
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