module.exports = [
  {
    name: "execute", 
    code: `$reply[$messageID;no]

$exec[$message]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`

  },
  {
    name: "c-exec", 
    code: `$reply[$messageID;yes]

Created exec slash interaction successfully.

$createApplicationCommand[$guildID;exec;For executing shell commands.;true;slash;code:enter the function.:true:3]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "exec", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[
$eval[$slashOption[code]]]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]

$onlyBotPerms[useappcmds;I'm missing \`USE_APPLICATION_COMMANDS\` permission.]`
  }
]