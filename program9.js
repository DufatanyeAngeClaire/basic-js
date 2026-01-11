// PROGRAM 9: Error Handler

console.log("\n=== PROGRAM 9: Error Handler ===\n");

function program9_errorHandler() {
  const red = '\x1b[31m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  function handleError(errorType, message, details) {
    console.log(`\n${red}${bold}ERROR:${reset} ${errorType}`);
    console.log(`${yellow}Message:${reset} ${message}`);

    if (details) {
      console.log(`${yellow}Details:${reset} ${details}`);
    }
  }

  handleError(
    "TypeError",
    "Cannot read property 'name' of undefined",
    "Line 42"
  );

  handleError(
    "ConnectionError",
    "Failed to connect to database",
    "Timeout after 5000ms"
  );
}

program9_errorHandler();
