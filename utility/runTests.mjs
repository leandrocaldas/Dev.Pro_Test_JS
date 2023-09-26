export function runTests() {
    const { exec } = require('child_process');
    exec('npm run start-test', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Tests output: ${stdout}`);
    });
}
