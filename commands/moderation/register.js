module.exports = [
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