const Discord = require("discord.js");


module.exports = {
  config: {
    name: "roleinfo",
    aliases: ["ri"]
  },
run: async (bot, message, args) => {
    let inline = true

    let role = args.join(` `)
    let gRole = message.guild.roles.find(`name`, role) || message.member.highestRole || message.mentions.roles.first()
    if(!gRole) return message.reply("Couldn't find that role.");

    const status = {
        false: "No",
        true: "Yes"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("ffc0cb")
    .setAuthor("Atom's Roleinfo")
    .addField("Main", `**> ID**: ${gRole.id}\n**> Name**: ${gRole.name}\n**> Mention**: <@&${gRole.id}>\n**> Members**: ${gRole.members.size}`)
    .addField("Infomation", `**> Hex**: \`${gRole.hexColor}\`\n**> Position**: ${gRole.position}\n**> Mentionalbe**: ${status[gRole.mentionable]}`)
    
    message.channel.send(roleemebed);

}
}