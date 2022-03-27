module.exports = {
  Bot: {
  token: "TOKENHERE",
  prefix: ["$getServerVar[prefix]","<@$clientID>","<@!$clientID"],
  intents: "all",
  database: {
      type:'default',
      db:require('dbdjs.db'),
      path:"./data/",
      tables:["Terra"],
      promisify:false
  },
  respondOnEdit: {
      commands: true
  },
  debug: {
      interpreter : true 
},
  suppressAllErrors: {
      errorMessage: ["", "{newEmbed:{title:Opps!}{description:There is an error!}{color:fcbfcb}}"]
  }
}
}
