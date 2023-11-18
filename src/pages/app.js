const express = require('express');
const app = express();

// Define a sample endpoint for GET request
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from your API!',
    timestamp: new Date().toISOString()
  };
  res.json(data);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
