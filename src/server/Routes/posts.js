const router = require('express').Router();
const verify = require('../helpers/valid');


router.get('/',verify,(req,res)=>{
    res.json({posts:{title:'my first post',description:'i cant describe it'}

    })

})



module.exports= router