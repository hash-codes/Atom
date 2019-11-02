const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  config: {
    name: "userinfo",
    aliases: ["ui"]
  },
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));

    var permissions = [];
    var acknowledgements = "No";

    if (message.member.hasPermission("KICK_MEMBERS")) {
      permissions.push("Kick Members");
    }

    if (message.member.hasPermission("BAN_MEMBERS")) {
      permissions.push("Ban Members");
    }

    if (message.member.hasPermission("ADMINISTRATOR")) {
      permissions.push("Administrator");
    }

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      permissions.push("Manage Messages");
    }

    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      permissions.push("Manage Channels");
    }

    if (message.member.hasPermission("MENTION_EVERYONE")) {
      permissions.push("Mention Everyone");
    }

    if (message.member.hasPermission("MANAGE_NICKNAMES")) {
      permissions.push("Manage Nicknames");
    }

    if (message.member.hasPermission("MANAGE_ROLES")) {
      permissions.push("Manage Roles");
    }

    if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
      permissions.push("Manage Webhooks");
    }

    if (message.member.hasPermission("MANAGE_EMOJIS")) {
      permissions.push("Manage Emojis");
    }

    if (message.member.hasPermission("CREATE_INSTANT_INVITE")) {
      permissions.push("Create Instant Invite");
    }

    if (message.member.hasPermission("ADD_REACTIONS")) {
      permissions.push("Add Reactions");
    }
    
    if (message.member.hasPermission("VIEW_AUDIT_LOG")) {
      permissions.push("View Audit Log");
    }
    
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      permissions.push("Mangae Messages");
    }
    
    if(message.member.hasPermission("MUTE_MEMBERS")){
      permissions.push("Mute Members")
    }
    
    if(message.member.hasPermission("DEAFEN_MEMBERS")){
      permissions.push("Deafen Members")
    }
    
    if(message.member.hasPermission("USE_EXTERNAL_EMOJIS")){
      permissions.push("Use external Emojis")
    }
    
    if(message.member.hasPermission("CHANGE_NICKNAME")){
      permissions.push("Change Nickname")
    }
    
    if(message.member.hasPermission("PRIORITY_SPEAKER")){
      permissions.push("Priority Speaker")
    }
    
    if(message.member.hasPermission("MOVE_MEMBERS")){
      permissions.push("Move Members")
    }
    
    if (permissions.length == 0) {
      permissions.push("No Key Permissions Found");
    }

    if (`<@${member.user.id}>` == message.guild.owner) {
      acknowledgements = "Server Owner";
    }

    // Member variables
    const joined = formatDate(member.joinedAt);
    const roles =
      member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(" | ") || "Has no Roles!";

    // User variables
    const created = formatDate(member.user.createdAt);

    let embed = new RichEmbed()
      .setAuthor("Atom's Userinfo")
      .addField(
        "> User",
        `=> Mention: <@${member.id}>\n=> ID: ${member.id}\n=> Created At: ${created}\n=> Discriminator: #${member.user.discriminator}`
      )
      .addField(
        "> Member",
        `=> Server Owner: ${acknowledgements}\n=> Roles: ${roles}\n=> Permissions:\`\`\`${permissions.join(" | ")}\`\`\`\n=> Joined at: ${joined}`
      )
      .setColor("#7289da")
    
    if (member.user.presence.game)
    embed.addField(
      "> Currently playing",
      stripIndents`=> Name: ${member.user.presence.game.name}`
    );

    message.channel.send(embed)
  }
};
