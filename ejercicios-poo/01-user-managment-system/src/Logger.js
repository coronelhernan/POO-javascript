export class Logger {
  static logs = [];

  static add(user, action, result) {
    const entry = {
      user: user.name,
      role: user.role,
      action,
      result,
      timestamp: new Date().toLocaleString()
    };

    Logger.logs.push(entry);
    console.log("📝 LOG:", entry);
  }

  static getLogs() {
    return Logger.logs;
  }
}
