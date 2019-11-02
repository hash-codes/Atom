const Discord = require ("discord.js")
const fs = require ("fs")
let categories = ["Bot"]
const db = require("quick.db")

module.exports = {
  config: {
    name: "set",
    aliases: []
  },
run: async (bot,message,args) => {
  
  const nonono = new Discord.RichEmbed()
  .setAuthor("No Permission")
  .setDescription(`You don't have the Permission to run run this Command!\nRequired Permission: ADMINISTRATOR`)
  .setColor("#ff0000")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nonono)
  
if(args[0] === "logchannel") {
  const fail = new Discord.RichEmbed()
  .setAuthor("Missing Arguments")
  .setDescription("You didn`t Provided an Channel, please Provide an Channel without `#`")
  
    if(!args[1]) return message.channel.send(fail)
    let report = JSON.parse(fs.readFileSync("./logs.json", "utf8"));
    report[message.guild.id] = {
        reportchannel: args.slice(1).join(" ")
    };
    fs.writeFile("./logs.json", JSON.stringify(report), (err) => {
        if(err) console.log(err)
    });
  let Embed = new Discord.RichEmbed()
  .setAuthor("Success")
  .setDescription(`The Log Channel is now: **${args.slice(1).join(" ")}**`)
  .setColor("#32cd32")
    message.channel.send(Embed)
}
  
  if(args[0] === "prefix") {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  prefixes[message.guild.id] = {
    prefixes: args[1]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
    const embed2 = new Discord.RichEmbed()
   .setColor(0x32cd32)
   .setAuthor("Succes")
   .setDescription(`Prefix is now ${args[1]}`)
    message.channel.send(embed2)
    
    db.set(`prefixes_${message.guild.id}`, args[1])
    
  return
  }
  
  if(!args[0]) {
  let soos = new Discord.RichEmbed()
  .setAuthor("Looks like you need Help")
  .setDescription("Available Modules you can set (2):\n`logchannel`\n`prefix`")
  .setColor(0x32cd32)
  message.channel.send(soos)
 return
  }
  
}
}