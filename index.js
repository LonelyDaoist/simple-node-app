const os = require("os");
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from NodeJS');
});

app.get('/whoami', (req, res) => {
  res.send(`Sent from ${os.hostname()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
