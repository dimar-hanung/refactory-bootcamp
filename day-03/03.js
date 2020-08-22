const fs = require("fs");

const write = (text) => {
  fs.appendFile("debug.log", `${text}\n`, function (err) {
    if (err) throw err;
    console.log("Log Saved :", text);
  });
};

class Log {
  static info(message) {
    write(`[${new Date().toISOString()}] INFO: ${message}`);
  }

  static error(message) {
    write(`[${new Date().toISOString()}] ERROR: ${message}`);
    return false;
  }

  static notice(message) {
    write(`[${new Date().toISOString()}] NOTICE: ${message}`);
  }

  static warning(message) {
    write(`[${new Date().toISOString()}] WARNING: ${message}`);
  }

  static debug(message) {
    write(`[${new Date().toISOString()}] DEBUG: ${message}`);
  }

  static alert(message) {
    write(`[${new Date().toISOString()}] ALERT: ${message}`);
  }

  static critical(message) {
    write(`[${new Date().toISOString()}] CRITICAL: ${message}`);
  }

  static emergency(message) {
    write(`[${new Date().toISOString()}] EMERGENCY: ${message}`);
  }

}

Log.info("This is an information about something.");
Log.error("We can't divide any numbers by zero.");
Log.notice("Someone loves your status.");
Log.warning("Insufficient funds.");
Log.debug("This is debug message.");
Log.alert("Achtung! Achtung!");
Log.critical("Medic!! We've got critical damages.");
Log.emergency("System hung. Contact system administrator immediately!");

