// PROGRAM 12: Diff Viewer

console.log("\n=== PROGRAM 12: Diff Viewer ===\n");

function program12_diffViewer() {
  const green = '\x1b[32m';
  const red = '\x1b[31m';
  const reset = '\x1b[0m';

  function showDiff(oldLines, newLines) {
    console.log("Changes:");

    oldLines.forEach(line => {
      console.log(`${red}- ${line}${reset}`);
    });

    newLines.forEach(line => {
      console.log(`${green}+ ${line}${reset}`);
    });
  }

  const oldCode = ["const x = 10;", "console.log(x);"];
  const newCode = ["const x = 20;", "const y = 5;", "console.log(x + y);"];

  showDiff(oldCode, newCode);
}

program12_diffViewer();
