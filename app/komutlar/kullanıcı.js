const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Eferz Public Bot")
.setTitle("<a:oksag:860652244265730088> Eferz Kullanıcı Komutları <a:oksol:860652270647902260>")
 .setTimestamp()
.setDescription("<:etiket:860652328200962069> **e+istek** = İstediğiniz Bir İsteği Bot Sahibine İletir \n <:etiket:860652328200962069> **e+toplamkomut** = Bot'da Ne Kadar Komut Var Onu Gösterir \n <:etiket:860652328200962069> **e+sunucular** = Hangi Sunucularda Olduğuma Bakarsın \n <:etiket:860652328200962069> **e+avatar** = Avatarınıza bakarsınız.  \n <:etiket:860652328200962069> **e+yetkilerim** = Yetkilerini görürsün.  \n <:etiket:860652328200962069> **e+profil** = Profilini görürsün.  \n <:etiket:860652328200962069> **e+sunucuresmi** = Sunucu resmini gösterir.  \n <:etiket:860652328200962069> **e+ping** = Botun Pingine Bakarsın.  \n <:etiket:860652328200962069> **e+id** = Birisinin id'sine Bakarsın.  \n <:etiket:860652328200962069> **e+davet** = Beni Sunucuna Ekle.  \n <:etiket:860652328200962069> **e+bot-bilgi** = Bot istatistiklerini görürsünüz.  \n <:etiket:860652328200962069> **e+bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.addField(
      `<:bilgilendirme:860427580507029514> ** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zhtSraKdQP) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846644596762607646&permissions=8&scope=bot) \n `
    )
.setImage("https://cdn.discordapp.com/attachments/860427497371336705/860654500452499496/standard_5.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}