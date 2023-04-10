const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(8).max(20).required(),
})

module.exports = loginSchema
  