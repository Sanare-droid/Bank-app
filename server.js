const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace with the actual endpoint URL from the Co-operative Bank API documentation
const coOpBankApiUrl = 'https://api.cooperativebank.co.ke/FundsTransfer/Internal/2.0.0/SendToAccountt';
// Replace with the actual credentials or authentication token
const apiToken = 'YOUR_API_TOKEN';

// Replace with the actual endpoint URL from the Co-operative Bank API documentation
const equityBankApiUrl = 'https://www.equitybankgroup.com/api';
// Replace with the actual credentials or authentication token
const apiToken = 'YOUR_API_TOKEN';

// Set up routes
app.get('/', (req, res) => {
  res.send('Bank Management System Backend');
});

app.get('/balance/:accountNumber', async (req, res) => {
  const { accountNumber } = req.params;

  try {
    // Make an HTTP GET request to the Co-operative Bank's API
    const response = await axios.get(`${coOpBankApiUrl}/${accountNumber}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        // Add any other required headers based on the API documentation
      },
      {
        // Make an HTTP GET request to the Co-operative Bank's API
        const response = await axios.get(`${equityBankApiUrl}/${accountNumber}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            // Add any other required headers based on the API documentation
          },
    });

    // Process the response and extract the account balance
    const balance = response.data.balance;

    res.json({ balance });
  } catch (error) {
    console.error('Error fetching account balance from Co-operative Bank API:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
