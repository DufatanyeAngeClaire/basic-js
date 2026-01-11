// PROGRAM 11: Loading Animation

console.log("\n=== PROGRAM 11: Loading Animation ===\n");

async function program11_loadingAnimation() {
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m';
  const frames = ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'];

  let i = 0;
  console.log("Loading animation demo:");

  const interval = setInterval(() => {
    process.stdout.write(`\r${cyan}${frames[i]}${reset} Loading...`);
    i = (i + 1) % frames.length;
  }, 100);

  // Stop animation after 3 seconds
  setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\r✓ Complete!        \n'); // overwrite line
  }, 3000);
}

// Run the animation
program11_loadingAnimation();
