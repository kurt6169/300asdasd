const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Eferz Özel Bot")
    .setTitle(
      "<a:elmas:851020504822841375> Eferz Gif Komutları <a:elmas:851020504822841375>"
    )
    .setTimestamp()
    .setDescription(
      "<a:class_hashtag:851020381254320179> **e+animal** = **__Size Rastgele Hayvan Resimleri Atar.__** \n <a:class_hashtag:851020381254320179> **e+anime** = **__Size Rastgele Anime Resimleri Atar.__** \n <a:class_hashtag:851020381254320179> **e+baby** = **__Size Rastgele Bebek Fotoğrafı Atar.__** \n <a:class_hashtag:851020381254320179> **e+couple** = **__Size Rastgele Sevgili Fotoğrafları Atar.__** \n <a:class_hashtag:851020381254320179> **e+man** = **__Size Rastgele Erkek Fotoğrafı Atar__** \n <a:class_hashtag:851020381254320179> **e+woman** = **__Size Rastgele Kız Fotoğrafı Atar__**"
    )
    .addField(
      `<a:class_saryldz:851020403219890186> ** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zhtSraKdQP) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846644596762607646&permissions=8&scope=bot) \n `
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/860427497371336705/860654500452499496/standard_5.gif"
    );
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help", "y"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "gif",
  category: "kullanıcı",
  description: "gif Menüsü.",
  usage: "e+gif"
};