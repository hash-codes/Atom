const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");


module.exports = {
  config: {
    name: "purge",
    aliases: ["clear"]
  },
run: async (bot, message, args) => {
  message.delete();

  let user = message.author

  if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply('No permission!').then(msg => msg.delete(15000));
  if (!args[0]) return message.channel.send('Please specify amount of messaged wanted to be cleared.').then(msg => msg.delete(5000));
  if (args[0] > 100) return message.channel.send('You can not purge more than 100 messages.').then(msg => msg.delete(5000));
  
  const logsChannel = message.guild.channels.find(r => r.name === "log") || message.channel;
  if(!logsChannel) return message.channel.send("Internal Error");

  let cleanEmbed = new Discord.RichEmbed()
      .setAuthor("Purge")
      .setColor("#FFC0CB")
      .addField("Cleared by", user)
      .addField("Amount deleted", args[0])
      .addField("Channel", message.channel)

  logsChannel.send(cleanEmbed)

  message.channel.bulkDelete(args[0]);
}
}