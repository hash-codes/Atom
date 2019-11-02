const { get } = require("superagent");
const Discord = require("discord.js");

module.exports = {
  config: {
    name: "trigger",
    aliases: []
  },
run: async(client,message,args,la) => {
	let user = message.mentions.users.first() || message.author;
const { body } = await get("https://emilia.shrf.xyz/api/triggered")

.query({ image: user.displayAvatarURL})
.set("Authorization", "Bearer Mjg1NDE4MDAwNzM0MDkzMzEy.uM7sovZdzFBtyRn9hoLv691KM5JnRAem7AUirrj8cA");

const embed = new Discord.RichEmbed() 
.attachFile({ attachment: body, name: "triggered.gif" })
.setImage("attachment://triggered.gif")

message.channel.send(embed);
}
}