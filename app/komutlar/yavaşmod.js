const Discord = require('discord.js');

exports.run = async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`<a:cross3:860652902338789377> Hata Yetkili Değilsiniz`)
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor('0000a0')
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
        return message.author.send(ozelmesajuyari);
    }

    if (message.channel.type !== "text") return;
    const limit = args[0] ? args[0] : 0;
    if (!limit) {
        var embed = new Discord.MessageEmbed()
            .setDescription(`<a:tmdiscord:860652695630381057> Doğru Kullanım: \`e+slowmode <süre>\``)
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send({ embed })
        return
    }
    if (limit > 21600) {
        return message.channel.send(new Discord.MessageEmbed().setDescription("<a:cross3:860652902338789377> Süre Limiti Makisimum **21.600** Saniye Olabilir!").setColor('0000a0'));
    } //CrewCode
    message.channel.send(new Discord.MessageEmbed().setDescription(`<a:tdtick3:860652855777296384> Yavaş Mod **${limit}** Saniye Olarak Ayarlandı!`).setColor('0000a0'));
    var request = require('request');
    request({
        url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
        method: "PATCH",
        json: {
            rate_limit_per_user: limit
        },
        headers: {
            "Authorization": `Bot ${client.token}`
        },
    })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["slow-mode", "slowmode"],
    permLevel: 2,
};

exports.help = {
    name: 'slow-mode',
    description: 'Sohbete yazma sınır (süre) ekler.', //CrewCode
    usage: 'slow-mode [1/10]',
};