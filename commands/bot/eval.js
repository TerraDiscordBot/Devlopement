module.exports = [
  {
    name: "eval", 
    code: `$reply[$messageID;no]

$eval[$message]

$onlyBotPerms[admin;I need \`ADMINISTRATOR\` permission to work without any problem.]

$onlyForRoles[$botOwnerID;This command is not for you, it's for my owner(s).]`

  },
  {
    name: "c-eval", 
    code: `$reply[$messageID;yes]

Created eval slash interaction successfully.

$createApplicationCommand[$guildID;eval;For evaluating your functions.;true;slash;code:enter the code.:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission.]`
  }, 
  {
    name: "eval", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[Output:
$eval[$slashOption[code]]]

$onlyBotPerms[admin;I need \`ADMINISTRATOR\` permission to work without any problem.]`
  }
]
