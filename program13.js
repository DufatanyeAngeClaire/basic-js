// PROGRAM 13: Colored JSON

console.log("\n=== PROGRAM 13: Colored JSON ===\n");

function program13_coloredJSON() {
  const blue = '\x1b[34m';   // keys
  const green = '\x1b[32m';  // strings
  const yellow = '\x1b[33m'; // numbers / booleans
  const reset = '\x1b[0m';

  const data = {
    name: "John Doe",
    age: 30,
    isActive: true
  };

  console.log("{");
  console.log(` ${blue}"name"${reset}: ${green}"${data.name}"${reset},`);
  console.log(` ${blue}"age"${reset}: ${yellow}${data.age}${reset},`);
  console.log(` ${blue}"isActive"${reset}: ${yellow}${data.isActive}${reset}`);
  console.log("}");
}

program13_coloredJSON();
