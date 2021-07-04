const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Eferz Public Bot ")
.setTitle("<a:oksag:860652244265730088> Eferz Eğlence Komutları <a:oksol:860652270647902260>")
 .setTimestamp()
.setDescription(" \n <:etiket:860652328200962069> **e+kapaklaf** = Etiketlediğiniz Kişiye Kapak Laf Söyler \n <:etiket:860652328200962069> **e+dans-et** = Dans Edersiniz \n <:etiket:860652328200962069> **e+ilginçbilgi** = Bot Size İlginç Bilgiler Söyler \n <:etiket:860652328200962069> **e+herkeseçay** = Herkese Çay Ismarlarsınız \n <:etiket:860652328200962069> **e+kralol** = Kral Olursunuz \n <:etiket:860652328200962069> **e+tersyazı** = Bir Yazıyı Bot Ters Yazar. \n <:etiket:860652328200962069> **e+fbi** = Bot FBi Gif Atar.  \n <:etiket:860652328200962069> **e+token** = Tokenimi Öğrenmek İstemezmisin?  \n <:etiket:860652328200962069> **e+düello** = Düello Atarsın.  \n <:etiket:860652328200962069> **e+wasted** = Polis tarafından yakalanırsın.  \n <:etiket:860652328200962069> **e+atatürk** = Dene ve gör... (1881-1938) ")
.addField(
`<:bilgilendirme:860427580507029514> ** Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zhtSraKdQP) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846644596762607646&permissions=8&scope=bot) \n `
    )
.setImage("https://cdn.discordapp.com/attachments/860427497371336705/860654500452499496/standard_5.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}