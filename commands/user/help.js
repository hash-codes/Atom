const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  config: {
    name: "help",
    aliases: []
  },
  run: async (bot, message, args) => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: "atom"
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    
    if (args[0] === "staff") {
      let embed = new Discord.RichEmbed()
      .setAuthor("Staff")
      .setDescription("**Required Permissions**\nMinimum: **`Kick Members`**\nRecommend: **`Administrator`**\n\n**`ban`** | **Ban's a Member from the Guild**\n**`unban`** | **Unban's a Member from the Guild**\n**`Kick`** | **Kick's A Member from the Guild**\n**`Warn`** | **Warn's a Member from the Guild\n**`Unwarn`** | **Unwarn's a Member from the Guild**\n**`Purge`** | **Bulk Deletes Messages**\n**`set`** | **Can set Prefix or Logchannel**\n**`setrole`** | **Gives A User an Role to a Member**\n**`takerole`** | **Removes a Role from an Member**")
      .setColor("#7289da")
      message.channel.send(embed);
      return
    }

    if (args[0] === "economy") {
      let embed = new Discord.RichEmbed();
      message.channel.send("Working Soon");
    }

    if (args[0] === "music") {
      let embed = new Discord.RichEmbed();
      message.channel.send("Working Soon");
    }

    if (args[0] === "user") {
      let embed = new Discord.RichEmbed();
      message.channel.send("Working Soon");
    }

    let embed = new Discord.RichEmbed()
      .setAuthor("Atom")
      .setDescription(
        `Type **\`${prefix} help <module>\`** to get a Full documentation of the Commands\n[Support Server](https://discord.gg/GZBjbmn) | [Invite](https://discordapp.com/api/oauth2/authorize?client_id=638270055209238528&permissions=8&scope=bot)`
      )
      .addField(
        ":shield: Staff",
        "**[** **`ban`** | **`unban`** | **`kick`** | **`warn`** | **`unwarn`** | **`purge`** | **`set`** | **`setrole`** | **`takerole`** **]**"
      )
      .addField(
        "💰 Economy",
        "**[** **`balance`** | **`pay`** | **`rob`** | **`gamble`** | **`daily`** | **`deposit`** | **`withdraw`** | **`work`** | **`addmoney`** | **`removemoney`** **]**"
      )
      .addField(
        "🎧 Music", 
        "**[** **`play`** | **`leave`** **]**"
      )
      .addField(
        "👥 User",
        "**[** **`meme`** | **`achievement`** | **`wanted`** | **`trigger`** | **`help`** | **`botinfo`** | **`serverinfo`** | **`userinfo`** **]**"
      )
      .setColor("#7289da");
    message.channel.send(embed);
  }
};
