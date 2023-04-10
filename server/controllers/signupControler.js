const signupSchema = require("../utils/Validation/signupSchema");


const signupControler = (req, res) => {
    const {
        username,
        email,
        password,
        confirmPassword,
        role,
        mobile
      } = req.body;

      const {error, value} = signupSchema.validate({
        username,
        email,
        password,
        confirmPassword,
        role,
        mobile
      }, {abortEarly: false });
      if(error) {
        res.status(400).json({
            error: true,
            data: {
                error: error.details
            },

        })
        return;
      }

          res.status(200).json({
            error: false,
            data:{
                user: value,
            }
          })
      }


module.exports = signupControler;
