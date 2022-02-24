module.exports = [
  {
    name: "avatar", 
    code: `$reply[$messageID;no]

$userAvatar[$findUser[1]]

$onlyBotPerms[embedlinks;I need \`EMBED_LINKS\` permission.]`

  },
  {
    name: "c-avatar", 
    code: `$reply[$messageID;yes]

Created avatar slash interaction successfully.

$createApplicationCommand[$guildID;avatar;To see, an user's avatar or yours.;true;slash;member:please pick a member:false:6]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "avatar", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[$replaceText[$userAvatar[$interactionData[options.data[0].value];undefined;$authorAvatar]]]
    
$onlyBotPerms[embedlinks;I need \`EMBED_LINKS\` permission.]`
  }
]
