module.exports = [
  {
    name: "ping", 
    code: `$reply[$messageID;no]

$pingms for web socket, 
$dbPingms for database.`

  },
  {
  name: "c-ping", 
  code: `$reply[$messageID;yes]

Created ping slash interaction successfully.

$createApplicationCommand[$guildID;ping;Check bot's web socket speed and database.;true;slash]

$onlyPerms[admin;You're missing \`ADMINISTRATOR\`.]`
  }
]
