// PROGRAM 5: Menu System

console.log("\n=== PROGRAM 5: Menu System ===\n");

function program5_menuSystem() {
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  console.log(`${cyan}${bold}╔════════════════════════════╗${reset}`);
  console.log(`${cyan}${bold}║        MAIN MENU           ║${reset}`);
  console.log(`${cyan}${bold}╚════════════════════════════╝${reset}`);

  console.log(`${green}1.${reset} Start Game`);
  console.log(`${green}2.${reset} Settings`);
  console.log(`${green}3.${reset} High Scores`);
  console.log(`${yellow}4.${reset} Exit`);
}

program5_menuSystem();
