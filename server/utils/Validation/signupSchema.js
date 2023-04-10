const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().min(3).max(30).alphanum().required(),
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(3).max(20).required(),
    confirmPassword : Joi.valid(Joi.ref('password')).required(),
    role:  Joi.string().required().valid('admin', 'user'),
    mobile: Joi.string().pattern(new RegExp("^[0-9]{7,}$")).required(),
    
})

module.exports = signupSchema;
