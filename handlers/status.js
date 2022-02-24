module.exports = (bot) => {
  bot.status({
    text: "my awesome status",
    type: "LISTENING", 
    status: "online", 
    time: 6
  }) 
}
