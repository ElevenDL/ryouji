const Discord = require('discord.js')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

		let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.get(args[0]);
    } else {
        user = message.author;
    }
  
  const avatarEmbed = new Discord.RichEmbed()
  .setTitle(`${user.username}`)
  .setColor(`#23272A`)
  .setImage(user.avatarURL)

message.channel.send(avatarEmbed)


};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['avatar'],
	permLevel: 0
};

exports.help = {
	name: 'Avatar',
	category: '💈 Utilitários',
	description: 'Mostrar o avatar de um usuário',
	usage: 'r!avatar / r!avatar [menção]'
};