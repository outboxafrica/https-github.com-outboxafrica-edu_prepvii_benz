const router = require('express').Router();

const User = require('../Models/user.model')
const bodyParser = require('body-parser')


 
router.post('/register',async(req,res)=>{
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
router.post('/login',(req,res)=>{
    res.send('login')
})

module.exports= router
