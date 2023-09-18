const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json()); // Enable JSON request body parsing

// Define a route for making the PUT request
app.put('/request', async (req, res) => {
  try {
    const apiUrl = 'https://prod-24.centralindia.logic.azure.com/workflows/78d6df0ed1384ee0b7d04918f1a32b85/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=i6gXuS7-5_fFVf-0u8M4UfymINDULCMifsscfN5cPKM'; // Replace with your desired URL
    const headers = {
        Name: 'Shubhanshu Kumar', // Your user agent
        College: 'abcd', // Your authorization header if needed
        StudentId:'123456',
        Filename:'index.js',
        Password:'chkansm'
      // Add other headers as needed
    };

    const dataToSend = req.body; // JSON data to send in the PUT request

    const response = await axios.put(apiUrl, dataToSend, {
      headers: headers,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    // Log the error details for debugging
    console.error('Axios Error:', error.message);
    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', error.response.data);
    }
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
