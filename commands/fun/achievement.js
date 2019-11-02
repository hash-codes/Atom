
const Canvas = require('canvas-constructor');
const Canvas1 = require('canvas');
const Discord = require ('discord.js')

module.exports = {
  config: {
    name: "achievement",
    aliases: ["ach"]
  },
run: async (bot,message,args) => {

        var award1 = args.join(' ')
        if (!award1) return message.reply ('Not inputting a needed parameter and breaking the bot')
        var pic3 = await Canvas1.loadImage('https://api.alexflipnote.dev/achievement?text=' + award1);
        if (award1.toLowerCase().includes('gnomed')) var pic3 = await Canvas1.loadImage("https://i1.sndcdn.com/artworks-000179621054-n5eeg3-t500x500.jpg");
        var w = pic3.naturalWidth;
        var h = pic3.naturalHeight;
        const canvas2 = new Canvas.Canvas(w, h)
            .addImage(pic3, 0, 0)
            .toBuffer()
        let canvas3 = new Discord.MessageAttachment(canvas2, 'card.png')
        message.channel.send(message.channel.send({ files: [{ attachment: canvas2, name: 'card.png' }] }))
}
}