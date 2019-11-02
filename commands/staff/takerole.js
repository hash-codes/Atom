const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const fs = require("fs");

module.exports = {
  config: {
    name: "takerole",
    aliases: ["tr"]
  },
  run: async (bot, message, args) => {
    let rMember =
      message.mentions.members.first() ||
      message.guild.members.find(m => m.user.tag === args[0]) ||
      message.guild.members.get(args[0]);
    if (!rMember)
      return message.channel.send("Please provide a user to add a role too.");
    let role =
      message.guild.roles.find(r => r.name == args[1]) ||
      message.guild.roles.find(r => r.id == args[1]) ||
      message.mentions.roles.first();
    if (!role)
      return message.channel.send("Please provide a role to add to said user.");
    if (!rMember.roles.has(role.id))
      return message.reply(`${rMember} don't haves that role.`);
    await rMember.removeRole(role.id);

    const emebd = new Discord.RichEmbed()
      .setAuthor("Role removed")
      .setDescription(`I removed the User ${rMember} the Role **${args[1]}**`)
      .setColor("ff0000");
    message.channel.send(emebd);

    let logEmbed = new Discord.RichEmbed()
      .setAuthor("Role Removed")
      .addField("> Removed Role", role)
      .addField("> Removed By", `<@${message.author.id}> (${message.author.tag})`)
      .addField("> Removed From", rMember)
      .setColor("#ff0000");
    let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
    if(!report[message.guild.id]){
    }
    let rchannel = report[message.guild.id].reportchannel
    let reportchannel = message.guild.channels.find(r => r.name === rchannel);

    message.delete();
    reportchannel.send(logEmbed);

  }
};
