module.exports = [
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
    
$onlyBotPerms[embedlinks;{
	"content": "I need \`EMBED_LINKS\` permission.",
	"options":{
		"interaction" : true
	}
}]`
  }
]
