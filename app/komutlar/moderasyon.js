const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Eferz Public Bot")
.setTitle("<a:oksag:860652244265730088> Eferz Moderasyon Komutları <a:oksol:860652270647902260>")
 .setTimestamp()
.setDescription("<:etiket:860652328200962069> **e+snipe** = Silinen Mesajı Size Gösterir \n <:etiket:860652328200962069> **e+capslock-engelleme** = Capslock Sistemini Açarsınız \n <:etiket:860652328200962069> **e+sil** = Yazdığınız miktarda mesajı siler. (Bu Komut Şu Anda Bakımdadır Lütfen Kullanmayınız <a:cross3:860652902338789377>)  \n <:etiket:860652328200962069> **e+ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <:etiket:860652328200962069> **e+kick** = Etiketlediğiniz kişiyi atarsınız.  \n <:etiket:860652328200962069> **e+duyuru** = Bota duyuru yaptırırsınız.  \n <:etiket:860652328200962069> **e+küfür** = Küfür engel sistemini açarsınız.  \n <:etiket:860652328200962069> **e+reklam** = Reklam engel sistemi açarsınız.  \n <:etiket:860652328200962069> **e+slowmode** = Yavaş modu ayarlarsınız.  \n <:etiket:860652328200962069> **e+forceban** = Birisine id ban atarsınız.  \n <:etiket:860652328200962069> **e+unban** = Birisinin banını açarsınız.  \n <:etiket:860652328200962069> **e+sa-as** = Bot biri sa dedimi cevap verir.  \n <:etiket:860652328200962069> **e+sunucubilgi** = Sunucu bilgilerini görürsün. \n <:etiket:860652328200962069> **e+çekiliş** = Çekiliş başlatırsınız. (Bu Komut Şu Anda Bakımdadır Lütfen Kullanmayınız <a:cross3:860652902338789377>) ")
.addField(
      `<:bilgilendirme:860427580507029514> ** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zhtSraKdQP) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846644596762607646&permissions=8&scope=bot) \n `
    )
.setImage("https://cdn.discordapp.com/attachments/860427497371336705/860654500452499496/standard_5.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}