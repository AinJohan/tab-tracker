console.log('hello, ready to go')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/status', (req, res)=>{
  res.send({
    message:`Hello ${req.body.email}!, 'Your user was registered'`
      })
})

app.listen(process.env.PORT || 8081)


// Running the app steps
// PS D:\tab-tracker> cd server                  
// PS D:\tab-tracker\server> cd source
// PS D:\tab-tracker\server\source> npm start

  // Run NPM nodemon
  // PS D:\tab-tracker\server> cd ..\
  // PS D:\tab-tracker> cd tab-tracker
  // PS D:\tab-tracker\tab-tracker> cd server
  // PS D:\tab-tracker\tab-tracker\server> cd source
  // PS D:\tab-tracker\tab-tracker\server\source> nodemon app.js
  // result 'hello'
    
  // Why run init
  // Init is the parent of all Linux processes. It is the first process 
  // to start when a computer boots up and it runs until 
  // the system shuts down.


  // link how to donwload eslint
  // https://www.youtube.com/watch?v=qhuFviJn-es&t=269s&ab_channel=freeCodeCamp.org