const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/830451792172417035/851467372132433940/949a782b44878d850b11566668017139.gif","https://cdn.discordapp.com/attachments/830451792172417035/851468069603508235/b65602844cb927e95595d1b8b1bf177a.gif","https://cdn.discordapp.com/attachments/830451792172417035/851468216626184242/5cf8f2dcafcf041a6bc23af5fefc80d7.gif","https://cdn.discordapp.com/attachments/830451792172417035/851469387357749308/2557f76c208b9b4f148599589d42b542.gif","https://cdn.discordapp.com/attachments/830451792172417035/851469717869035560/787018b07e0443106c53bd95dd5d575a.gif","https://cdn.discordapp.com/attachments/830451792172417035/851469768975450202/954851979c40997f00116ad46ff13728.gif","https://cdn.discordapp.com/attachments/830451792172417035/851469779940016138/037f43cc310487b7424e4a956972dc9f.gif","https://cdn.discordapp.com/attachments/830451792172417035/851506853712232549/1f6d25b2983fe1048edd683a8074fca7.gif","https://cdn.discordapp.com/attachments/830451792172417035/851506884992565319/eac1d9e8f4ae15dc5a1fc1bbf6692b52.gif","https://cdn.discordapp.com/attachments/830451792172417035/851506908748709928/98f4669cba1fd06709aca15f712a6a58.gif","https://cdn.discordapp.com/attachments/830451792172417035/851801217519583242/Tiamin_Lady_Mixed_Gif_154.gif","https://cdn.discordapp.com/attachments/830451792172417035/851837684125138964/1f4fa6781f2f06078da7c1bca69250d1.gif","https://cdn.discordapp.com/attachments/746824656299753592/851938763286380604/AstRrid_Woman_40.gif","https://cdn.discordapp.com/attachments/746824656299753592/851938865228152872/LucelyaWomanGif_145.gif","https://cdn.discordapp.com/attachments/746824656299753592/851940803034349578/girl25.gif","https://cdn.discordapp.com/attachments/746824656299753592/851941268321730560/LucelyaWomanGif_328.gif","https://cdn.discordapp.com/attachments/746824656299753592/851941438237179924/woman-133.gif","https://media.discordapp.net/attachments/746824656299753592/851389233675239434/image0.gif","https://media.discordapp.net/attachments/818791793482924072/845225565573218344/image0.gif","https://media.discordapp.net/attachments/818791793482924072/845225566429118474/image2.gif","https://media.discordapp.net/attachments/746824656299753592/849953933958971402/AstRrid_Woman_22.gif","https://media.discordapp.net/attachments/608711473652563968/851083117384564746/daniela_16.gif","https://tenor.com/view/farfallina-secsi-gif-18057686","https://media.discordapp.net/attachments/608711473652563968/851102295990206524/image0.gif","https://media.discordapp.net/attachments/608711473652563968/851094795078205470/kai_girl_gif_1023.gif","https://cdn.discordapp.com/attachments/851795561757540374/851866396769648692/oh.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif","https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301552750002226/rosiegif4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301813912666145/gif_342.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif","https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Woman Gif ;")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-woman','woman-gif','gifwoman','womangif','woman','kadın'],

  permLevel: 0

};

exports.help = {

  name: 'woman',

  description: 'GHOST',

  usage: 'woman'

};