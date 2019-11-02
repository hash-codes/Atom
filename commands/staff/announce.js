const Discord = require("discord.js")

module.exports = {
  config: {
    name: "announce"
  },
run: async (bot, message, args) => {
    
    let argsresult;
    let mChannel = message.mentions.channels.first() 

       if(!args[0]) return message.channel.send("To Announce Something use this Format:\nn.announce <channel> <hex color> <message>")
    message.delete()
    if(mChannel) {
      let announce = new Discord.RichEmbed()
      .setAuthor("Announcement")
      .setDescription(args.slice(2).join(" "))
      .setFooter(`Announcement by ${message.author.tag}`)
      .setColor(`${args[1]}`)
        argsresult = args.slice(1).join(" ")
        mChannel.send(announce)
    }

}
}