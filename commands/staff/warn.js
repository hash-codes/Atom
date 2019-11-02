const Discord = require("discord.js");
const fs = require("fs");
const Warn = require("../../models/warn.js");
const botconfig = require("../../botconfig.json");
const mongoose = require("mongoose");
mongoose.connect(botconfig.database, {
    useNewUrlParser: true
});

module.exports = {
  config: {
    name: "warn",
    aliases: []
  },

run: async (bot, message, args) => {

    let embed2 = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("Please mention a user. Proper usage: warn <@user> <reason>")

    let embed3 = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("Please provide a reason. Proper usage: warn <@user> <reason>")

    let embed4 = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("Proper usage: warn <@user> <reason>")
  
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(embed2);
    const reason = args.slice(1).join(' ');
    if (!reason) return message.channel.send(embed3);
        var mentioned = message.mentions.users.first();
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You have missing permissions to do that.`).catch(console.error);
  
  message.channel.send(mentioned.tag + " has been warned, " + reason)      
  message.mentions.users.first().send(`:warning: **Warn |** Server **${message.guild.name}** by **${message.author.username}**\n\n**Reason:** ` + args.slice(1).join(' '))
  
  const NewWarn = new Warn({
  username: user.username,
  userID: user.id,
  reason: reason,
  staff: message.author.tag,
  staffID: message.author.id,
  serverID: message.guild.id,
  time: message.createdAt
        });
        await NewWarn.save().catch(e => console.log(e));
}
}