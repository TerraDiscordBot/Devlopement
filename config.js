module.exports = {
  Bot: {
    token: "YOUR_BOT_TOKEN",
    prefix: "$",
    intents: "all",
    database: {
      db: 'default',
      tables: ["main"],
      path: './database/',
      promisify: false
    }
  }
}
