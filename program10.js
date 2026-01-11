// PROGRAM 10: Table Display

console.log("\n=== PROGRAM 10: Table Display ===\n");

function program10_tableDisplay() {
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  const users = [
    { id: 1, name: "Alice", status: "Active" },
    { id: 2, name: "Bob", status: "Active" },
    { id: 3, name: "Charlie", status: "Inactive" }
  ];

  // Header
  console.log(`${cyan}${bold}┌──────┬─────────────┬──────────┐${reset}`);
  console.log(`${cyan}${bold}│ ID   │ Name        │ Status   │${reset}`);
  console.log(`${cyan}${bold}├──────┼─────────────┼──────────┤${reset}`);

  // Rows
  users.forEach(user => {
    const statusColor = user.status === "Active" ? green : yellow;
    console.log(
      `│ ${user.id.toString().padEnd(4)} │ ${user.name.padEnd(10)} │ ${statusColor}${user.status.padEnd(8)}${reset} │`
    );
  });

  // Footer
  console.log(`${cyan}${bold}└──────┴─────────────┴──────────┘${reset}`);
}

program10_tableDisplay();
