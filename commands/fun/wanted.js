const { get } = require("superagent");
const Discord = require("discord.js");

module.exports = {
  config: {
    name: "wanted",
    aliases: []
  },
run: async(client,message,args,la) => {
	let user = message.mentions.users.first() || message.author;
const { body } = await get("https://emilia.shrf.xyz/api/wanted")

.query({ image: user.displayAvatarURL})
.set("Authorization", "Bearer Mjg1NDE4MDAwNzM0MDkzMzEy.uM7sovZdzFBtyRn9hoLv691KM5JnRAem7AUirrj8cA");

const embed = new Discord.RichEmbed() 
.attachFile({ attachment: body, name: "wanted.png" })
.setImage("attachment://wanted.png")

message.channel.send(embed);
}
}