const { RichEmbed } = require("discord.js")

module.exports = {
  config: {
    name: "serverinfo",
    aliases: ["si"]
  },
  run: async (bot, message, args) => {
    
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    }
  
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "europe": ":flag_eu: Europe",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    
  let icon = message.guild.iconURL 
    
  let guild = message.guild
  var online = guild.members.filter(m => m.presence.status === 'online').size
  var dnd = guild.members.filter(m => m.presence.status === 'dnd').size
  var idle = guild.members.filter(m => m.presence.status === 'idle').size
  var offline = guild.members.filter(m => m.presence.status === 'offline').size
    
    let embed = new RichEmbed()
    .setAuthor(`Atom's Serverinfo`)
    .setDescription(`**${message.guild.name}** got Created ${checkDays(message.guild.createdAt)} days ago`)
    .addField("Members", `**Total Member Count**: ${message.guild.memberCount}\n=> Online: ${online}\n=> Idle: ${idle}\n=> Do Not Disturb: ${dnd}\n=> Offline: ${offline}`)
    .addField(`Roles (${message.guild.roles.size})`, `${guild.roles.map(r => r).join(" | ")}`)
    .addField("Region", `${region[message.guild.region]}`)
    .addField("Channels", `**Text Channels:** ${message.guild.channels.size}\n**Voice Channels**: ${message.guild.channels.filter(c => c.type === 'voice').size}\n**Categorys:** ${message.guild.channels.filter(c => c.type === 'category').size}`)
    .addField("Utility", `**Owner**: <@${message.guild.ownerID}>\n=> Discriminator: #${guild.owner.user.discriminator}\n=> ID: ${message.guild.ownerID}\n**Verification Level**: ${verifLevels[message.guild.verificationLevel]}\n**Server Icon**: [Icon URL](${message.guild.iconURL})`)
    .setColor("#7289da")
    message.channel.send(embed)
    
  }
}