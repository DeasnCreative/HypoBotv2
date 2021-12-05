const Discord = require('discord.js');

exports.execute = async (client, message, args) => {
   
if(message.member.permissions.has(8)) return message.react('❌');
 message.channel.clone().then(chnl => {
  let position = message.channel.position;
  chnl.setPosition(position).then(x => x.send('https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831'), x.send(`${message.author} tarafından kanal patlatıldı!`));
  message.channel.delete();
});
  
}
exports.conf = {
  command: "nuke", // Asıl komutumuz
  description: "belirtdiğin kanalı silip tekrar izinleriyle beraber geri açar!",
  aliases: [] 
}