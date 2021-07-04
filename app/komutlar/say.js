const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {

  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name}`, `${message.author.displayAvatarURL()}`)
    .setDescription(
     `**Ses kanallarında \`${count}\` kişi bulunmaktadır!**
     \n**Sunucuda \`${message.guild.memberCount}\` kişi bulunmaktadır!**
     \n**Sunucudaki Bot Sayısı:** \`${message.guild.members.cache.filter(m => m.user.bot).size}\``) 

    .setThumbnail(message.guild.iconURL())
    .setFooter(client.user.username,client.user.avatarURL())
    .setTimestamp();

  message.channel.send(embed);
};
exports.conf = {
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"]
};
exports.help = {
  name: "say"
};