module.exports = {
name: "wave",
code: `
$description[1;<@$authorID> waves.]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/wave;GET;;url]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please don't spam commands. :)\n(**%time%**)]
$onlyIf[$isBot[$authorID]!=true;]`
}