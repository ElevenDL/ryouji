const superagent = require("superagent");
const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) { 
    message.reply(" Você precisa estar em um canal de NSFW")
    return;
   }
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#23272A")
    .setTitle("Hentai é arte")
    .setImage(body.url)
    .setColor("#23272A")

    message.channel.send(hentaiEmbed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['hentai', 'oi'],
	permLevel: 0
};

exports.help = {
	name: 'Hentai',
	category: '🔞 NSFW',
	description: 'Procura por hentai na internet',
	usage: 'r!hentai'
};
