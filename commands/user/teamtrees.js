const {TeamTrees} = require('teamtrees-api');
const teamTrees = new TeamTrees();

module.exports = {
  config: {
    name: "teamtrees",
    aliases: ["tt"]
  },
  run: async (bot, message, args) => {
    
    let total = teamTrees.getTotalTrees(true)
    let recent = teamTrees.getMostRecent(name)
    
    message.channel.send(recent)
    
  }
}