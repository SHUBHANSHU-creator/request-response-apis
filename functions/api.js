const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http')
const router = express.Router();
const app = express();


// const port = 3000;

// app.use(express.json()); // Enable JSON request body parsing

router.get('/', (req, res) => {
    res.send('App is running..');
  });
  
router.post('/bfhl',async (req,res) =>{
  const arr = ["M","1","334","4","B"]
//   res.send(typeof(req.body.data))
//   console.log(req.body.data);
  var alphabets = [];
  var numbers = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (!isNaN(element) && Number.isInteger(Number(element))) {
      numbers.push(element);
    } else if (/^[A-Za-z]$/.test(element)) {
      alphabets.push(element);
    } else {
      continue;
    }
  }

  // console.log(alphabets,numbers);
  
  var highest = alphabets
  highest.sort()
  const response = {
    "is_success": true,
    "user_id": "Shubhanshu_Kumar_28062002", 
    'email' : 'shubhanshu.kumar2020@vitbhopal.ac.in',
    'roll_number':'20BCE10748',
    "numbers": numbers,
    "alphabets": alphabets,
    "highest_alphabet": [highest[highest.length-1]]

  }

  res.status(200).json({
    response
  })
})

router.get('/bfhl',async (req,res)=>{
  res.status(200).send({
    'operation_code':1
  })
})


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);