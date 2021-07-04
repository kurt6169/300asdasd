const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Eferz Public Bot")
    .setTitle(
      "<a:oksag:860652244265730088> Eferz Yardım Menüsü <a:oksol:860652270647902260>"
    )
    .setTimestamp()
    .setDescription(
      "<a:hype:860427957401813013> **e+eğlence** = **__Eğlence Komutlarını Görüntülersiniz.__** \n <a:elmas:860427726829781012> **e+moderasyon** = **__Moderasyon Komutlarını Görüntülersiniz.__** \n <a:altinuzi:860427655270498305> **e+kullanıcı** = **__Kullanıcı Komutlarını Görüntülersiniz.__** \n <a:siyahates:860427685637652480> **e+logo** = **__Logo Komutlarını Görüntülersiniz.__** \n <a:oley:860428038507462667> **e+gif** = **__Gif Komutlarını Görüntülersiniz__**"
    )
    .addField(
      `<:bilgilendirme:860427580507029514> ** Bağlantılar  **`,
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
  name: "yardım",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "e+yardım"
};
