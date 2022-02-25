module.exports = [
  {
    name: "afk", 
    code: `$reply[$messageID;no]

$changeNickname[$authorID;AFK︱$replaceText[$replaceText[$checkCondition[$nickname!=];true;$nickname];false;$username]]

$setUserVar[afkStatus;yes]
$setUserVar[afkReason;$message]

You're now afk with "$message" reason.

$onlyBotPerms[managenicknames;I need \`MANAGE_NICKNAMES\` permission.]`

  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]
 	
$reply[$messageID;yes]

The member you mentioned is afk, cause "$getUserVar[afkReason;$mentioned[1;no]]"

$onlyIf[$getUserVar[afkStatus;$mentioned[1;no]]==yes;]`

  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]

$deleteVar[afkStatus;$authorID]
$deleteVar[afkReason;$authorID]

$changeNickname[$authorID;$replaceText[$replaceText[$checkCondition[$nickname!=];true;$nickname];false;$username]]

$reply[$messageID;yes]

Welcome back, removed your afk reason.

$onlyIf[$getGlobalUserVar[afkStatus;$authorid]==yes;]`

  },
  {
    name: "c-afk", 
    code: `$reply[$messageID;yes]

Created afk slash interaction successfully.

$createApplicationCommand[$guildID;afk;Set yourself on afk status.;true;slash;reason:please describe a reason.:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }, 
  {
    name: "afk", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$changeNickname[$authorID;AFK︱$replaceText[$replaceText[$checkCondition[$nickname!=];true;$nickname];false;$username]]

$setUserVar[afkStatus;yes]
$setUserVar[afkReason;$message]

$interactionReply[You're now afk with "$slashOption[reason]" reason.]
    
$onlyBotPerms[managenicknames;{
	"content": "I need \`MANAGE_NICKNAMES\` permission.",
	"options":{
		"interaction" : true
		}
	}
]`
  }
]
