function log_message(logFileName, message, level) {
    const timestamp = getTimestamp();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    const logOutput = document.getElementById("logOutput");
    logOutput.innerHTML += logEntry+"<br>";

    // Send log entry to the server for file writing
    writeToLogFile(logFileName, logEntry);
}

function getTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function writeToLogFile(logFileName, logEntry) {
    // Send an HTTP POST request to server.js server to write the log
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:3000/writeLog`, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    const data = { logFileName, logEntry };
    xhr.send(JSON.stringify(data));
}

function logMessage() {
    const logFileName = document.getElementById("logFileName").value;
    const logMessage = document.getElementById("logMessage").value;
    const logLevel = document.getElementById("logLevel").value;

    // Call the log_message function with the provided inputs
    log_message(logFileName, logMessage, logLevel);

    // Clear input fields
    document.getElementById("logMessage").value = "";

    // Disable the "Log" button again
    document.getElementById("logButton").disabled = true;
}

module.exports = { log_message };
