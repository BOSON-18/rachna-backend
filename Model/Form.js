const mongoose= require("mongoose")


const formSchema = mongoose.Schema({
    leaderName: {
        type: String,
        required: true,
    },
    startUpName: {
        type: String,
        required: true,
    },
    leaderPhone: {
        type: Number,
        required: true,
    },
    leaderPhoneSecondary: {
        type: Number,
        required: true,
    },
    leaderMail: {
        type: String,
        required: true,
    },
    teammates: {
        type: Number,
        required: true,
    },
})


module.exports= mongoose.model("Form",formSchema)