module.exports = {
name: "gift",
aliases: "give",
code: `
$description[1;You gifted $getVar[Coi]$message[2] to <@$mentioned[1]>]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message[2]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$mentioned[1]];$message[2]];$mentioned[1]]

$onlyIf[$findUser[$mentioned[1]]!=$authorID;You cannot give coins to yourself.]
$onlyIf[$message!=;**Usage**: \`$getServerVar[Prefix]give <@username> <amount>\` (error: no user mentioned, no amount mentioned)]
$onlyIf[$isNumber[$message[2]]!=false;**Usage**: \`$getServerVar[Prefix]give <@username> <amount>\` (error: not a number)]
$onlyIf[$checkContains[$message[2];-]!=true;No negative values allowed.]
$onlyIf[$message[2]>$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$globalCooldown[5s;I'm sure you don't need to give $username[$mentioned[1]] money all the time :upside_down: (**%time%**)]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}