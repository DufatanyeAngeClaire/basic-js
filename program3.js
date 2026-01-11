// PROGRAM 3: Text Styling Demo

console.log("\n=== PROGRAM 3: Text Styling Demo ===\n");

function program3_textStyling() {
  const bold = '\x1b[1m';
  const dim = '\x1b[2m';
  const italic = '\x1b[3m';
  const underline = '\x1b[4m';
  const reset = '\x1b[0m';

  console.log(`${bold}This is BOLD text${reset}`);
  console.log(`${dim}This is DIM text${reset}`);
  console.log(`${italic}This is ITALIC text${reset}`);
  console.log(`${underline}This is UNDERLINED text${reset}`);

  // Combine styles
  const redBold = '\x1b[31m\x1b[1m';
  console.log(`${redBold}This is BOLD and RED${reset}`);
}

program3_textStyling();
