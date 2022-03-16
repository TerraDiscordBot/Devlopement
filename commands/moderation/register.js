module.exports = [
    {
        name: "c-sreg",
        code: `
        Created poll slash interaction successfully.

        $createApplicationCommand[$guildID;set-register;Set roles to members pick;true;slash;rolePosition:please tell the role position on the embed message.:true:3;roleItself:please pick the role to members take it.:true:8;roleDescription:Show role's description:true:3;roleEmoji:Add emoji to button.:true:3]

        $onlyPerms[admin;You're missing \`ADMINISTRATOR\` permission to create it.]
        `
    },
    {
        $if: 'v4',
        name: "set-register",
        type: 'interaction', 
        prototype: 'slash', 
        code:`
        $sendMessage[{
            "embeds": "{newEmbed:
                {title: Please pick a role!}

                $if[$getServerVar[roleItself1]!=]

                {field: $getServerVar[rolePosition1] - $getServerVar[roleDescription1]: <@&$getServerVar[roleItself1]}}

                $endIf

                $if[$getServerVar[roleItself2]!=]

                {field: $getServerVar[rolePosition2] - $getServerVar[roleDescription2]: <@&$getServerVar[roleItself2]}}

                $endIf
            }",
            "components": "{actionRow:
                {button::2:firstRole:false:$getServerVar[roleEmoji]}
            }

        }]

        $setServerVar[rolePosition$slashOption[rolePosition];$slashOption[rolePosition]]
        $setServerVar[rolePosition$slashOption[rolePosition];$slashOption[roleItself]]
        $setServerVar[rolePosition$slashOption[rolePosition];$slashOption[roleDescription]]
        $setServerVar[rolePosition$slashOption[rolePosition];$slashOption[roleEmoji]]

        $interactionReply[;{newEmbed:
            {thumbnail: $serverIcon}
            {title: Added role succesfully!}
            {field: Role Position: $slashOption[rolePosition]}
            {field: Role: $slashOption[roleItself]}
            {field: Description: $slashOption[roleDescription]}
            {field: Emoji: $slashOption[roleEmoji]}
            {color: $getRoleColor[$slashOption[roleItself]]}
        }]
        `
    }
]