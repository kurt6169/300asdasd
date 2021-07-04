const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : e+istek sayaç komutu')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('İstek Kodunuz başarıyla bildirildi <a:tdtick3:860652855777296384> ')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **isteği ;**`)
.addField(`<:bilgilendirme:860427580507029514> **Gönderen Kişinin Bilgileri**`, `<a:tdadmin:860652043835277332> Kullanıcı ID: ${message.author.id}\n <a:tdadmin:860652043835277332> Kullanıcı Adı: ${message.author.username}\n <a:tdadmin:860652043835277332> Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("<:bilgilendirme:860427580507029514> **Gönderilen İstek/Tavsiye Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('861028063127142432').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'istek <istek>'
}