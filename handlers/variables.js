module.exports = (bot) => {
//afk variables
	bot.variables({
		afkReason: "no", 
		afkStatus: "nothing.",
		afkOnTime: "0"
	})

//register variables
	bot.variables({
		rolePosition1: " ",
		roleItself1: " ",
		roleDescription1: " ",
		roleEmoji1: " ",
		rolePosition2: " ",
		roleItself2: " ",
		roleDescription2: " ",
		roleEmoji2: " "
	})
}
