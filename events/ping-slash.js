module.exports = (bot) => {
  bot.interactionCommand({
    name: "ping", 
    prototype: 'slash', 
    code: `$interactionReply[$pingms for web socket, $dbPingms for database.]

$onlyBotPerms[useappcmds;I'm missing \`USE_APPLICATION_COMMANDS\` permission.]`
  })
}
