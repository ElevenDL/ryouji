exports.run = async (client, message, args) => { 
 const Discord = require('discord.js');
 const c = require('currency-formatter');

 const item = client.itens;

 const Embed = new Discord.RichEmbed()
 .setTitle(':shopping_cart: Lista de Itens Para Compra')
 .setColor('#23272A')
 .setDescription('Dê **r!comprar [item]** para obter algum item da lista.')
 .addField('Badge', `\n Descrição: ${item.badge.description} \n Preço: :dollar: **${c.format(item.badge.valor, { code: 'BRL' })}** `)
 .addField('Bônus', `\n Descrição: ${item.bonus.description} \n Preço: :dollar: **${c.format(item.bonus.valor, { code: 'BRL' })}** `)
 .addField('Premium', `\n Descrição: ${item.premium.description} \n Preço: :dollar: **${c.format(item.premium.valor, { code: 'BRL' })}** `)
 .addField('Parceria', `\n Descrição: ${item.partner.description} \n Preço: :dollar: **${c.format(item.partner.valor, { code: 'BRL' })}** `)
 .addField('Background', `\n Descrição: ${item.background.description} \n Preço: :dollar: **${c.format(item.background.valor, { code: 'BRL' })}** `)

 .setFooter(message.author.username, message.author.avatarURL)

 message.channel.send(Embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['lista', 'list'],
    permLevel: 0
};

exports.help = {
    name: 'Lista',
    category:  '🌠 Cosméticos',
    description: 'Mostra a lista de itens para compra',
    usage: 'r!lista'
};