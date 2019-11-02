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
    name: "unwarn",
    aliases: []
  },
run: async (bot, message, args) => {

          let embed2 = new Discord.RichEmbed()
            .setColor("#ff0000")
        .setDescription("Please mention a name. Proper usage: unwarn <@user> <number>")
        
            let embed3 = new Discord.RichEmbed()
            .setColor("#ff0000")
        .setDescription("Please provide a number. Proper usage: unwarn <@user> <number>")
  
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(embed2);

    let number = parseInt(args[2]);
  
  
var checkvalid = number*1;
if (isNaN(checkvalid))return message.channel.send(embed3)
        if (message.channel.type === "dm") return;
  
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You have missing permissions to do that.`).catch(console.error);
  
if (!number){
  Warn.find({
    userID: user.id,
    serverID: message.guild.id
}, async (err, warns) => {
if(err) console.log(err);
if(warns.length === 0) return message.channel.send(user.tag + " has no warnings.");
for (var i  =0;i < warns.length;i++){
warns[i].userID = "0";

warns[i].save().catch(e => console.log(e));
  
  message.mentions.users.first().send(`:warning: **Unwarn |** Server **${message.guild.name}** by **${message.author.username}**`)
  message.channel.send(user.tag + " has been unwarned by all warnings.");
}
});

}

if (number){
  Warn.find({
    userID: user.id,
    serverID: message.guild.id
}, async (err, warns) => {
if(err) console.log(err);
if(warns.length === 0) return message.channel.send(user.tag + " has no warnings.");
if(warns.length < number ) return message.channel.send(user.tag + ` has only ${warns.length} warnings on this server.`);
warns[number-1].userID = "0";
warns[number-1].save().catch(e => console.log(e));
    
   message.mentions.users.first().send(`:warning: **Unwarn |** Server **${message.guild.name}** by **${message.author.username}**`)
    message.channel.send(user.tag + " has been unwarned by the number, " + number);
});
}
}
}