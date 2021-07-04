const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Eferz Özel Bot")
.setTitle("<a:elmas:851020504822841375> Eferz Logo Komutları <a:elmas:851020504822841375>")
 .setTimestamp()
.setDescription("<a:class_hashtag:851020381254320179> **e+dinamik** = Dinamik logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+altın** = Altın logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+banner** = Banner logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+basit** = Basit logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+elmas** = Elmas logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+sarı** = Sarı logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+neonmavi** = Neon mavi logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+kalın** = Kalın logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+anime** = Anime yazı tipinde logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+habbo** = Habbo yazı tipinde logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+arrow** = Ok işaretli logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+green** = Yeşil logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+alev** = Alevli logo oluşturur.  \n <a:class_hashtag:851020381254320179> **e+red** = Kırmızı logo oluşturur. ")
.addField(
      `<a:class_saryldz:851020403219890186> ** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zhtSraKdQP) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=851021742411743273&permissions=8&scope=bot) \n `
    )
.setImage("https://cdn.discordapp.com/attachments/842519263780536322/842529011858145280/standard_5.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}