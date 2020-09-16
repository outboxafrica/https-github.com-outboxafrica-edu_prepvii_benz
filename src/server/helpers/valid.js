const Joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')

 const registerValidation = (data)=>{
     
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
     }
     )
     return schema.validate(data);
    } 
 const loginValidation = (data)=>{
     
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
     }
     )
     return schema.validate(data);
    } 

    //verify token
     module.exports =function(req,res,next){
       const token = req.header('auth-token')
       if(!token)return res.status(401).send('Access denied')

       try{
          const verified = jwt.verify(token,process.env.TOKEN_SECRET)
          req.user= verified;
          next()

       }catch(err){
          res.status(400).send('Invalid token')

       }
     }


    module.exports.registerValidation = registerValidation
    module.exports.loginValidation = loginValidation  