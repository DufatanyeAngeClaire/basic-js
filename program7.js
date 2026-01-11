// PROGRAM 7: Status Messages

console.log("\n=== PROGRAM 7: Status Messages ===\n");

function program7_statusMessages() {
  const green = '\x1b[32m';
  const red = '\x1b[31m';
  const yellow = '\x1b[33m';
  const reset = '\x1b[0m';

  function status(message, type) {
    const symbols = {
      success: `${green}✓${reset}`,
      error: `${red}✗${reset}`,
      pending: `${yellow}⋯${reset}`
    };

    console.log(`${symbols[type]} ${message}`);
  }

  status("Server started successfully", "success");
  status("Database connection established", "success");
  status("Waiting for user input", "pending");
  status("Failed to load plugin", "error");
  status("Configuration file missing", "error");
}

program7_statusMessages();
