const { RichEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  config: {
    name: "balance",
    aliases: ["bal"]
  },
  run: async (bot, message, args) => {
    let user = message.mentions.members.first() || message.author;

    let money = await db.fetch(`money_${user.id}`);
    if (money === null) money = 0;
    let bank = await db.fetch(`bank_${user.id}`);
    if (bank === null) bank = 0;

    let embed = new RichEmbed()
      .setAuthor(`Bank Account`)
      .setDescription(`**=> Wallet**: ${money}\n**=> Bank**: ${bank}`)
      .setColor("#32cd32");
    message.channel.send(embed);
  }
};
