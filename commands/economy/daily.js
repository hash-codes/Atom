const Discord = require("discord.js");
const db = require("quick.db");
let date = require("date-and-time");
const ms = require("parse-ms");

module.exports = {
  config: {
    name: "daily"
  },
  run: async (bot, message, args) => {
    let timeout = 86400000;
    let amount = 500;

    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      let embed2 = new Discord.RichEmbed()
        .setAuthor(`Daily Reward`)
        .setDescription(
          `You already picked up your day's reward today! Come back in: **${time.hours}** hour(s) **${time.minutes}** minute(s) **${time.seconds}** second(s)!`
        );
      message.channel.send(embed2);
    } else {
      let embed = new Discord.RichEmbed().setAuthor(`Reward`).setDescription(`
            You picked up your day's reward worth 500 coins!
            `);
      message.channel.send(embed);
      db.add(`money_${message.author.id}`, amount);
      db.set(`daily_${message.author.id}`, Date.now());
    }
  }
};
