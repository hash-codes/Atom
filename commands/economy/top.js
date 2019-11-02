const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  config: {
    name: "top",
    aliases: ["rich"]
  },
  run: async(client,message,args,la) => {
	let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.get(money[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${money[i].data}$\n`
    }

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)
  }
  
}