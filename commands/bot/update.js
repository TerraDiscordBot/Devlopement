module.exports = [
  {
    name: "update", 
    code: `$reply[$messageID;no]

$updateCommands

Updated Commands.

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`

  },
  {
    name: "c-update", 
    code: `$reply[$messageID;yes]

Created update slash interaction successfully.

$createApplicationCommand[$guildID;update;Fastest way to update your codes without rebooting.;true;slash]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }, 
  {
    name: "update", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$updateCommands

$interactionReply[Updated codes, feel free to test again.]

$onlyForIDs[$botOwnerID;This command is not for you, it's for my owner(s).]`
  }
]