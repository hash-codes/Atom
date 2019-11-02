const { RichEmbed } = require ("discord.js")
const db = require ("quick.db")
let date = require("date-and-time");
const ms = require("parse-ms");

module.exports = {
  config: {
    name: "work",
    aliases: []
  },
  run: async (bot, message, args) => {
    
    let timeout = 3600000;
    let amount = 500;
    
    let work = await db.fetch(`work_${message.author.id}`);
    
    let jobs = ["McDonald's Worker", "YouTuber", "Twitch Streamer", "Influencer"]
    let math = Math.floor(Math.random() * jobs.length)
    
    let payout = Math.floor(Math.random() * 1000)
    
    if(isNaN(payout)) return message.reply("I failed")

    if (work !== null && timeout - (Date.now() - work) > 0) {
      let time = ms(timeout - (Date.now() - work));
      let embed2 = new RichEmbed()
        .setAuthor(`Working`)
        .setDescription(
          `You can't Work right now! Come back in: **${time.hours}** hour(s) **${time.minutes}** minute(s) **${time.seconds}** second(s)!`
        );
      message.channel.send(embed2);
    } else {
    
    let Embed = new RichEmbed()
    .setAuthor("Work")
    .setDescription(`You've done some work as a **${jobs[math]}**. Your Payout for now is **${payout}**`)
    .setFooter("You can earn extra money on the Gamble Machine")
    .setColor("#32cd32")
    db.add(`money_${message.author.id}`, payout)
    db.set(`work_${message.author.id}`, Date.now())
    message.channel.send(Embed)
    }
  }
}