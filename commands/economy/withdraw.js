const { RichEmbed } = require ('discord.js')
const db = require ('quick.db')

module.exports = {
  config: {
    name: "withdraw",
    aliases: ["with"]
  },
  run: async (bot, message, args) => {
    
    let toDeposit = args[0];
    
if(isNaN(toDeposit)) {

return message.channel.send("That's not a Number")
}
    
    let embed = new RichEmbed()
    .setDescription(`You withdrawn ${args[0]} Coins to your Wallet.`)
    message.channel.send(embed)
    
    db.subtract(`bank_${message.author.id}`, Number(args[0]))
    db.add(`money_${message.author.id}`, Number(args[0]))
    
  }
}