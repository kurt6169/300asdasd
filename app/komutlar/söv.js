const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, msg, args) => {
  
  let kufur=[  
    "büyücüler gelse de benim ömrümden alıp ananın ömrüne versinki daha çok sikeyim",
    "Zamanın makinesi icat edilsinde geçmişini de sikeyim",
    "ananın mına bacagımı sokup yarım vole attıgımının evladi",
    "amına kodumun jedayı seni",
    "babanın annesinin amına koyayım orul orul orospu evladı",
    "ebenin amı gibi kaşları da kara",
    "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "senin ananın amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama anan çok yordu",
"öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
    "senin ananı boğaz köprüsünün ortasında amına yoğurt doldurup yayık ayran olana kadar sikerim, hem asya seyreder hem avrupa",
    "ulan anasının amındayken, yarrağımın alnına periyodik aralıklarla dokunduğu orospu çocuğu",
    "anan aids şüphesiyle doktora gitmiş türkiyedeki erkek nüfusu tedirgin",
  
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {  
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});

if(member.bot == true)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Yapay zekaya sövsem kaç yazar amk :D?')
}})

  if(member.id === ayarlar.sahip)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('BİR DE SAHİBİME SÖVECEK AL O KÜFÜRÜ DÜR BÜK ANANIN AMINA SOK')
}})
  if(member.id === msg.guild.owner.id) return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`Ona söversem cibiliyetimi siker!`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (` Siktir duygusuz pezeveng bide bana sövecek!!`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 22)]}.`)
  }})
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
 };
 
exports.help = {
  name: 'söv',
  description: 'Birine Söver.',
  usage: 'söv'
 };