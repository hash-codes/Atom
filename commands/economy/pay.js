const db = require("quick.db");

module.exports = {
  config: {
    name: "pay"
  },
  run: async (message, args) => {
    let money = await db.fetch(`money_${message.author.id}`);

    let pUser =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    let gc = args[1];
    if (!pUser)
      return message.channel.send(`
You have to specify the user! 
      `);
    if (pUser.id === message.author.id)
      return message.channel.send("You can give yourself money!");

    if (!gc)
      return message.channel.send(`
You have to specify the number! 
  `);

    if (gc.includes("-"))
      return message.channel.send(`
Do not use Minus numbers!`);
    const admins = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (admins.some(word => args[1].includes(word))) {
      return message.channel.send("You can only pay numbers..");
    }

    if (money < args[1])
      return message.reply(`
You do not have so much coins!
  `);
    if (isNaN(gc)) {
      message.channel.send("You can only pay numbers (:");
    }
    db.add(`money_${pUser.id}`, parseInt(args[1]));

    db.subtract(`money_${message.author.id}`, parseInt(args[1]));

    message.channel.send(`
${message.author} gave ${pUser} ${args[1]} coin(s).`);
  }
};
