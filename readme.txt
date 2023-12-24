# Install the required packages
npm install ethereumjs-wallet web3
# For server:
npm install express body-parser

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

Now, when you run your Node.js server with node server.js, you can access your Ethereum wallet UI at http://localhost:3000. Note that you need to have a web3 library included in your project. You can download it from the official web3 GitHub repository or use a CDN in your HTML file.
