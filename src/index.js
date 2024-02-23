const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// Save config JSON to root/APPID/config.json
app.post('/DeployAppConfig/:appid', (req, res) => {
  const { appid } = req.params;
  const { DATA } = req.body;
  const filePath = `./${appid}/config.json`;

  // Convert DATA to JSON string and save to file
  const jsonData = JSON.stringify(DATA, null, 2);
  fs.writeFileSync(filePath, jsonData);

  res.status(200).send('Config saved successfully');
});

// Get config JSON using appid
app.get('/GetAppConfig/:appid', (req, res) => {
  const { appid } = req.params;
  const filePath = `./${appid}/config.json`;

  try {
    // Read config JSON file
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (err) {
    res.status(404).send('Config not found');
  }
});

app.all('/', (req, res) => {
  console.log('Just got a request!');
  res.send('Yo!');
});

app.listen(process.env.PORT || 3000);
