const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let devtr=[
      "Aşkölçer %1 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %2 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %3 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %4 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %5 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %6 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %7 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %8 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %9 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %10 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %11 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %12 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %14 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %15 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %16 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %18 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %19 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %20 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %29 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %31 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %32 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %34 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %35 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %36 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %37 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %38 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %39 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %40 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %41 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %42 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %43 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %55 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %57 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %59 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %60 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %62 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %63 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %64 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %65 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %66 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %69 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %70 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %74 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %75 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %76 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %77 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %79 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %80 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %81 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %82 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %83 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %0 Gösteriyor <a:kalbimkirildi:852293884863184916>",
      "Aşkölçer %95 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %99 Gösteriyor <a:patalyankalp:852294724676222977>",
      "Aşkölçer %100 Gösteriyor <a:patalyankalp:852294724676222977>",
    ]
let xfalcon = msg.mentions.members.first()
     if(!xfalcon)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('Kimi Sevdiğini Etiketle?')
  }});

    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${xfalcon} ${devtr[Math.floor(Math.random() * 30)]}.`)
    }})
    }

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }