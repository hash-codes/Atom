const { prefix } = require("../../botconfig.json");
const { inspect } = require("util")
const Discord = require("discord.js")

module.exports = { 
    config: {
        name: "eval",
        description: "Evaluates code",
        accessableby: "Bot Owner",
        type: "owner",
        aliases: ["ev"],
        usage: `${prefix}eval <input>`
    },
    run: async (bot, message, args) => {
      
      let embed = new Discord.RichEmbed()
        .setColor("ff0000")
        .setAuthor("Error")
        .setDescription(`Your ID don't matches to the Bot Owners ID.`)
      
      function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
      let ss = bot.guilds.size
      
      if(message.author.id !== "634762889051242525") return message.channel.send(embed)
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      if (evaled.includes(bot.token)) return message.reply("Don't you even dare")
      
      let embed = new Discord.RichEmbed()
      .setAuthor("Evaluation Result")
      .addField(":outbox_tray: Output", `\`\`\`${clean(evaled)}\`\`\``)
      .setColor("#7289da")
      
      message.channel.send(embed)
    } catch (err) {
      message.channel.send(`:x: Error! \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    }
}