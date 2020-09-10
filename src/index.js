const express = require('express')

const mongoose = require('mongoose')

const app = express()


const bodyParser = require('body-parser')

const dotenv = require('dotenv')


const authRoute = require('./server/helpers/validation')
const postRoute = require('./server/Routes/posts') 

dotenv.config()


app.use(express.json());


//Route middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

app.get('/',(req,res)=>{

  
  res.send('home')
})
app.get('/',(req,res)=>{
  res.send('home')
})


//MIDDLEWARE

app.listen(3002,()=>{
  console.log('running on port 3002')
})

//connect to DB
mongoose.connect(process.env.NODE_ENV,
  { useNewUrlParser: true, 
    useUnifiedTopology: true  },
  ()=>{console.log('connected to db'),
  {}})