const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const fs = require("fs")

module.exports = { 
  config: {
    name: "unban",
    aliases: []
  },

run: async (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permission to perform this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "SEND_MESSAGES"])) return message.channel.send("I dont have permission to perform this command!")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }

  let embe = new Discord.RichEmbed()
  .setAuthor("Unban | Public Message")
  .setColor(0x32dc32)
  .setDescription(`${bannedMember.tag} has been unbanned from the Guild!`)
  message.channel.send(embe)
  
    let embed = new Discord.RichEmbed()
    .setColor(0x32cd32)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let log = JSON.parse(fs.readFileSync("./logchannels.json", "utf8"));
    if(!log[message.guild.id]){
    }
    let logchannel = log[message.guild.id].reportchannel
    let logc = message.guild.channels.find(r => r.name === logchannel);

    message.delete();
    logc.send(embed);
    
}
}