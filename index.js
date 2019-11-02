const { Client, Collection, RichEmbed } = require("discord.js");
const { token, database } = require("./botconfig.json");
const bot = new Client();
const fs = require("fs");
const db = require("quick.db");

["aliases", "commands"].forEach(x => (bot[x] = new Collection()));
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

/*bot.on("message", message => {
  db.add(`money_${message.author.id}`, 100);
});/*

bot.on("messageDelete", async message => {
  let logs = await message.guild.fetchAuditLogs({ type: 72 });
  let entry = logs.entries.first();
  let guild = message.guild;
  let embed = new RichEmbed()
    .setTitle("Message Deleted")
    .setColor("#FF0000")
    .addField(
      "> Message Author",
      `<@${message.author.id}> (${message.author.tag})`
    )
    .addField("> Message Content", `"${message.content}"`)
    .addField("> Channel", message.channel);
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

/*bot.on("roleDelete", async (message, role) => {
  
const embed = new RichEmbed()
.setAuthor(`Role Removed`)
.addField(`> Deleted Role`, `${role.name} (${role.id})`)
.addField(`> Hex Color`, role.hexColor)
.addField("> Removed By", `message.author`)
.setColor("#ff0000")
let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
})*/

bot.on("roleCreate", (message, user, role) => {
  let embed = new RichEmbed()
    .setAuthor("Role Added")
    .addField("> Role Added", `${role.name}`)
    .addField("> Hex", `\`\`\`${role.hexColor}\`\`\``)
    .setColor("#32cd32");
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.on("guildBanAdd", (message, user, reason) => {
  let embed = new RichEmbed()
    .setAuthor("Ban Added")
    .addField("> Banned User", `${user.tag} (${user.id})`)
    .addField("> Reason", `${reason}`)
    .addField("> Banned by", `<@${message.author.id}> (${message.author.tag})`)
    .setColor("#32cd32");
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.on("guildBanRemove", (message, user) => {
  let embed = new RichEmbed()
    .setAuthor("Ban added")
    .addField("> Unbanned User", `${user.tag} (${user.id})`)
    .addField(
      "> Unbanned by",
      `<@${message.author.id}> (${message.author.tag})`
    )
    .setColor("#32cd32");
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.on("guildCreate", (message, guild) => {
  let embed = new RichEmbed();
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.on("guildMemberAdd", (message, user, guild) => {
  let embed = new RichEmbed();
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.on("guildMemberRemove", (message, usef) => {
  let embed = new RichEmbed();
  let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
  if (!report[message.guild.id]) {
  }
  let rchannel = report[message.guild.id].reportchannel;
  let reportchannel = message.guild.channels.find(r => r.name === rchannel);

  message.delete();
  reportchannel.send(embed);
});

bot.login(process.env.token);
