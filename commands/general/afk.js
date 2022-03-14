module.exports = [
   {
    name: "afk", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$changeNickname[$authorID;AFK︱$replaceText[$replaceText[$checkCondition[$nickname!=];true;$nickname];false;$username]]

$onlyIf[$authorID!=$ownerID;{
	"content": "I can't change your name cause you're owner. But, you're still on afk status with "$slashOption[reason]" reason.",
	"options": {
		"interaction": true
		}
	}
]

$deleteVar[afkStatus;$authorID]
$deleteVar[afkReason;$authorID]

$interactionReply[You're now afk with "$slashOption[reason]" reason.]
    
$onlyBotPerms[managenicknames;{
	"content": "I need \`MANAGE_NICKNAMES\` permission.",
	"options":{
		"interaction" : true
		}
	}
]`
  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]
 	
$reply[$messageID;yes]

The member you mentioned is afk, cause "$getUserVar[afkReason;$mentioned[1;no]]"

$onlyIf[$getUserVar[afk;$mentioned[1;no]]>=1;]`

  },
  {
  	name: "$alwaysExecute",
  	code: `$deleteIn[10s]

$deleteVar[afkStatus;$authorID]
$deleteVar[afkReason;$authorID]

$changeNickname[$authorID;$replaceText[$replaceText[$checkCondition[$nickname!=];true;$nickname];false;$username]]

$reply[$messageID;yes]

Welcome back, removed your afk reason.

$onlyIf[$getUserVar[afkStatus;$authorID]>=1;]`

  },
  {
    name: "c-afk", 
    code: `$reply[$messageID;yes]

Created afk slash interaction successfully.

$createApplicationCommand[$guildID;afk;Set yourself on afk status.;true;slash;reason:please describe a reason.:true:3]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]`
  }
]