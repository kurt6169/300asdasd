const Discord = require('discord.js')
const db = require('quick.db')
 
exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Başarılı Şekilde `Aktif` Edildi. Bot ban yetkisi Olanların Mesajını Silmeyecektir.')
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Başarılı Şekilde `Kapatıldı`')
return
}
  message.channel.send('Lütfen `Aç` yada `Kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','küfür-engel','küfür'],
 permLevel: 0
};
 
exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
 