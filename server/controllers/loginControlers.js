const loginSchema = require("../utils/Validation/loginSchema")

const loginControlers = (req,res) =>{
    const { email, password} = req.body
    const {error, value} = loginSchema.validate({email, password} , {
        abortEarly: false,
    })
    if (error){
        res.status(400).json({
            error: true,
            data: {
                error:error.details
            },
        })
        return;
    }
        res.status(200).json({
            error: false,
            data: {
                user: value
            }
        })
    

}
module.exports = loginControlers
