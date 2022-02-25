module.exports = [
  {
    name: "server-icon", 
    code: `$reply[$messageID;no]

$serverIcon

$onlyBotPerms[embedlinks;I need \`EMBED_LINKS\` permission.]`

  },
  {
    name: "c-server-icon", 
    code: `$reply[$messageID;yes]

Created server-icon slash interaction successfully.

$createApplicationCommand[$guildID;server-icon;To see, server's icon.;true;slash]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "server-icon", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[$serverIcon]
    
$onlyBotPerms[embedlinks;{
	"content": "I need \`EMBED_LINKS\` permission.",
	"options":{
		"interaction" : true
		}
	}
]`
  }
]
