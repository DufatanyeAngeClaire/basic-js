// PROGRAM 6: Progress Bar

console.log("\n=== PROGRAM 6: Progress Bar ===\n");

async function program6_progressBar() {
  const green = '\x1b[32m';
  const reset = '\x1b[0m';

  function showProgress(percent, label) {
    const filled = Math.floor(percent / 2);
    const empty = 50 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    process.stdout.write(
      `\r${green}${bar}${reset} ${percent}% - ${label}`
    );
  }

  console.log("Downloading file...");

  for (let i = 0; i <= 100; i += 10) {
    showProgress(i, "Please wait...");
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log("\n✓ Download complete!");
}

program6_progressBar();
