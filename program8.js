// PROGRAM 8: Timestamp Logger

console.log("\n=== PROGRAM 8: Timestamp Logger ===\n");

function program8_timestampLogger() {
  const gray = '\x1b[90m';
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m';

  function log(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`${gray}[${time}]${reset} ${cyan}${message}${reset}`);
  }

  log("User logged in");
  log("Fetching data from API");
  log("Data processing complete");
}

program8_timestampLogger();
