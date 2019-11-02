const { RichEmbed } = require ('discord.js')
const db = require ('quick.db')

module.exports = {
  config: {
    name: "deposit",
    aliases: ["dep"]
  },
  run: async (bot, message, args) => {
    
    let toDeposit = args[0];
    
if(isNaN(toDeposit)) {

return message.channel.send("That's not a Number")
}
    
    let embed = new RichEmbed()
    .setDescription(`You deposited ${toDeposit} Coins to your Bank.`)
    message.channel.send(embed)
    
    db.add(`bank_${message.author.id}`, Number(args[0]))
    db.subtract(`money_${message.author.id}`, Number(args[0]))
    
  }
}