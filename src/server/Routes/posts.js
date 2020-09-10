const router = require('express').Router();
const verify = require('../helpers/valid');


router.get('/',(req,res)=>{
    res.json({posts:'my first post',description:'random data-dont touch'

    })

})



module.exports= router