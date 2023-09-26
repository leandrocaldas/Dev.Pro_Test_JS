const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to handle log writing
app.post('/writeLog', (req, res) => {
    const { logFileName, logEntry } = req.body;
    // const timestamp = getTimestamp();
    console.log(logFileName)
    const logFilePath = `../logs/${logFileName}.log`;

    // Create the logs directory if it doesn't exist
    if (!fs.existsSync('../logs')) {
        fs.mkdirSync('../logs');
    }

    // Append log entry to the log file
    fs.appendFile(logFilePath, `${logEntry}\n`, (err) => {
        if (err) {
            console.error(`Error writing to ${logFileName}: ${err}`);
            res.status(500).send(err);
        } else {
            console.log(`Log entry written to ${logFileName}`);
            res.status(200).send('Log entry written successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});