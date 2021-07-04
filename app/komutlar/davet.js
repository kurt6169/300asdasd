const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle <a:tada:851020435458228244>")
  .setDescription("[__**Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=846644596762607646&permissions=8&scope=bot) \n [__**Destek Sunucusu**__](https://discord.gg/zhtSraKdQP)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};