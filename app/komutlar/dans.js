const Discord = require('discord.js');
exports.run = async(client, message) => {
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mükemmel dans ediyorsun!')
    .setColor(3447003)
    .setImage(`https://thumbs.gfycat.com/HelplessCheeryIvorybackedwoodswallow-max-1mb.gif`)
    return message.channel.send(vatan);
} //mrk
  //coders area
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dans','danset'],
  permLevel: 0
};

exports.help = {
  name: 'dans-et',
  description: '',
  usage: ''
};