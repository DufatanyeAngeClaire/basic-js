// PROGRAM 15: Complete Logger Class

console.log("\n=== PROGRAM 15: Complete Logger Class ===\n");

function program15_completeLogger() {
  class Logger {
    static colors = {
      reset: '\x1b[0m',
      gray: '\x1b[90m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      cyan: '\x1b[36m'
    };

    // Returns timestamp HH:MM:SS
    static timestamp() {
      return new Date().toISOString().split('T')[1].split('.')[0];
    }

    static log(level, color, message) {
      const time = `${this.colors.gray}[${this.timestamp()}]${this.colors.reset}`;
      const tag = `${color}[${level}]${this.colors.reset}`;
      console.log(`${time} ${tag} ${message}`);
    }

    static info(msg) {
      this.log('INFO', this.colors.cyan, msg);
    }

    static success(msg) {
      this.log('SUCCESS', this.colors.green, msg);
    }

    static warn(msg) {
      this.log('WARN', this.colors.yellow, msg);
    }

    static error(msg) {
      this.log('ERROR', this.colors.red, msg);
    }

    static debug(msg) {
      this.log('DEBUG', this.colors.blue, msg);
    }
  }

  // Usage examples
  Logger.info("Starting application");
  Logger.debug("Loading configuration");
  Logger.success("Configuration loaded");
  Logger.warn("Using default settings");
  Logger.error("Could not connect to external service");
}

program15_completeLogger();
