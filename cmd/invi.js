const Discord = require('discord.js')




exports.run = (bot, msg, params) => {

   msg.delete();
  msg.author.send(`https://discord.com/oauth2/authorize?client_id=${msg.author.bot.id}&scope=bot&permissions=8`);

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "inv",
  description: "Bot Info",
  usage: "inv"
};
