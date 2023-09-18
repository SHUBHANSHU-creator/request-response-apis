const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json()); 

app.post('/request', async (req, res) => {
  try {
    const base = 'url'; 

    const response = await axios.post(base);

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


















// const body = {
    //     'name':'Shubhanshu',
    //     'registration'
    // }
    // const headers = {
    //   'User-Agent': 'Your User Agent', // Your user agent
    //   'Authorization': 'Bearer YourAccessToken', // Your authorization header if needed
    //   // Add other headers as needed
    // };

    // const dataToSend = body; // JSON data to send in the API request