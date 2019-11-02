const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");

module.exports = {
  config: {
    name: "gamble",
    aliases: ["bet"]
  },
  run: async (bot, message, args) => {
    
    let percents = ["3,51", "3,91", "4,00", "4,31", "4,72", "4,99"]
    let math = Math.floor(Math.random() * percents.length)
    
    let money = await db.fetch(`money_${message.author.id}`);

    let amout = args[0];
    if (!amout) return message.channel.send("You have to specify the coins!");
    if (money < amout)
      return message.channel.send("You do not have enough Coins!");
    if (amout.includes("-"))
      return message.channel.send("Looks like your try to Gamble with Minus Numbers, that won't work");
    let result = ["win", "lose"];
    let resault = Math.floor(Math.random() * result.length);
    if (result[resault] === "lose") {
      db.subtract(`money_${message.author.id}`, amout);
      message.channel.send(`You lose!`);
    }
    if (result[resault] === "win") {
      db.add(`money_${message.author.id}`, 3 * amout);

      let embed = new Discord.RichEmbed()
      .setAuthor("Gambling Machine")
      .setDescription(`You won: **${amout}** coins\nYour Bet got multiplied by **3**\n\nYou now have ${money} coins`)
      .setColor("#32cd32")
      
      message.channel.send(embed);
      return;
    }
  }
};
