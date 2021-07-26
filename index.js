const os = require("os");
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from NodeJS.\n');
});

app.get('/whoami', (req, res) => {
  res.send(`Sent from ${os.hostname()}.\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
