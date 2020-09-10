const router = require('express').Router();

const User = require('../Models/user.model')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation,loginValidation}= require('../helpers/valid')

const verify = require('../helpers/valid');

 
router.post('/register',async(req,res)=>{

   //check if the data is valid
const {error} = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//check if user alraedy exists
const emailExist = await User.findOne({email:req.body.email})
if(emailExist) return res.status(400).send('Email already exits')


//create new user
const user = new User({
        name: req.body.name,
        email: req.body.email, 
        password:req.body.password
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser)

    }catch(err){
        res.status(400).send(err)
    }
    
})






//Login

router.post('/login',async(req,res)=>{

   //check if the user data is valid
   const {error} = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   
   //check if user email already exists
   const user = await User.findOne({email:req.body.email})
   if(!user) return res.status(400).send('Email / password doesnt exist')

   //check password
   const validPass = await bcrypt.compare(req.body.password, user.password);
   if(!validPass)return res.status(400).send('password is not correct');


//create and assign a token
const token = jwt.sign({
   _id: user._id}, process.env.TOKEN_SECRET)
   res.header('auth-token',token).send(token); 
}) 



router.get('/posts',verify,(req,res)=>{
    res.json({posts:'my first post',description:'random data-dont access'

    })

})



module.exports= router



module.exports= router
