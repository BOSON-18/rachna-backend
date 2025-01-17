const Form = require("../Model/Form");

exports.handleSubmit = async (req, res) => {
  try {
    const {
        leaderName,
        startUpName,
        leaderPhone,
        leaderPhoneSecondary,
        leaderMail,
        teammates,
        idea,
        websiteLink,
        currentStage
    } = req.body || req.query.params

    console.log(
        leaderName,
        startUpName,
        leaderPhone,
        leaderPhoneSecondary,
        leaderMail,
        teammates,
        idea,
        websiteLink,
        currentStage
    )

    if (
        !leaderName ||
        !startUpName ||
        !leaderPhone ||
        !leaderPhoneSecondary ||
        !leaderMail ||
        !teammates|| !idea || !currentStage
    ) {
        return res.status(400).json({
            success: false,
            message: 'Please Provide all fields',
        })
    }

    const data = {
        leaderName: leaderName,
        startUpName: startUpName,
        leaderPhone: leaderPhone,
        leaderPhoneSecondary: leaderPhoneSecondary,
        leaderMail: leaderMail,
        teammates: teammates,
        idea:idea,
        currentStage:currentStage,
        websiteLink:websiteLink
    }
console.log(data)
    const result = await Form.create(data)
    console.log("Printing result->",result)

    res.status(200).json({
        success:true,
        message:"Form submitted successfully",
        data:data
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
