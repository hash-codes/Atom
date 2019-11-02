const Discord = require ("discord.js")

module.exports = {
  config: {
    name: "botinfo",
    aliases: []
  }, 
  run: async (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setAuthor("About Atom")
    .setDescription("Atom is a Multipurpose Discord.js Bot. The Bot brings over 30 commands with it! Also Atom will get Updated every Sunday!")
    .addField("> Discord Bot List", `=> I didn't got Approved yet\n=> I'm not certified\n=> I have 0 Votes`)
    .addField("> Discord Infos", `=> I'm in ${bot.guilds.size} servers\n=> I'm serving over ${bot.users.size} users`)
    .addField("> Bot", `=> I have over **31 Commands**\n=> My Owner is <@634762889051242525> **(1mpressed#4603)**\n=> Also i got created at **Monday, 28th October**`)
    .addField("> Some Tipps", `=> All my Commands are \`toLowerCase\` what means you can type my Command however you want!\n=> My Prefix can be used as \`atom help\` or \`atomhelp\``)
    .setColor("#7289da")
    message.channel.send(embed)
    
  }
}
  
  
  
  