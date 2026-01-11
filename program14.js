// PROGRAM 14: Box Messages

console.log("\n=== PROGRAM 14: Box Messages ===\n");

function program14_boxMessages() {
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  function box(message, color = cyan) {
    const line = '─'.repeat(message.length + 2); // line length
    console.log(`${color}${bold}┌${line}┐${reset}`);
    console.log(`${color}${bold}│${reset} ${message} ${color}${bold}│${reset}`);
    console.log(`${color}${bold}└${line}┘${reset}`);
  }

  box("Welcome to the Application!");
  console.log();
  box("Successfully saved!", green);
}

program14_boxMessages();
