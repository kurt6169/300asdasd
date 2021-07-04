const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - Üyeleri : **${guild.memberCount}**`, guild.id)
      embed.setTitle('Botun bulunduğu sunucuların listesi!')
    }
    message.channel.send({embed: embed});
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "sunucular",
  description: "Botun olduğu sunucuları görüntülersiniz.",
  usage: "sunucular"
};