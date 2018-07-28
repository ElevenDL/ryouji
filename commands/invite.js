const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { 
 	const invite = await message.channel.createInvite({maxAge: 0});

  const invEmbed = new Discord.RichEmbed()
  .setTitle(':envelope_with_arrow: Aqui está o convite deste servidor')
  .setColor('#23272A')
  .setDescription(invite)
  .setTimestamp()
  .setFooter('Para obter meu convite dê r!info | To get my invite write r!info')
  message.channel.send(invEmbed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['invite', 'convite'],
    permLevel: 0,
    manu: false
};

exports.help = {
    name: 'Invite',
    category: '💈 Utilitários',
    description: 'Lhe dá o convite do servidor atual',
    usage: 'r!invite'
};