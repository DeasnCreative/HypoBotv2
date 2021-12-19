const Discord = require("discord.js");
const client = new Discord.Client();//lrowsxrd
const chalk = require("chalk");//lrowsxrd
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");//lrowsxrd
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);//lrowsxrd

client.ayarlar = { "token": "TOKEN", "prefix": "!", "sahip": "852608747813077052" }// Token , Sahip ID , Prefix buraya giriliyor 

const app = express();
app.get("/", (request, response) => {
  console.log();
  response.sendStatus(200);
});//lrowsxrd
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);//lrowsxrd
//lrowsxrd
var prefix = client.ayarlar.prefix;
//lrowsxrd
const log = message => {
  console.log(`${message}`);
};//lrowsxrd

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {//lrowsxrd
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });//lrowsxrd
  });
});
//lrowsxrd
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {//lrowsxrd
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//lrowsxrd
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });//lrowsxrd
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//lrowsxrd
client.load = command => {
  return new Promise((resolve, reject) => {
    try {//lrowsxrd
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {//lrowsxrd
        client.aliases.set(alias, cmd.help.name);
      });//lrowsxrd
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//lrowsxrd
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {//lrowsxrd
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//lrowsxrd
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//lrowsxrd

client.elevation = message => {
  if (!message.guild) {
    return;
  }//lrowsxrd
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 2;  
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};//lrowsxrd

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);

client.on('ready', async () => {
client.user.setActivity(`deasn was here!`, { type : 'WATCHING' })
client.user.setStatus('watch')
})//lrowsxrd


client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})


/////////////////////////////////////////////////////////////////////////////////////////////////

client.on('voiceStateUpdate', (oldMember, newMember) => {
  { 
    let giriş = client.channels.cache.get("918964715965800480");
    let çıkış = client.channels.cache.get("918964715965800480");
    let odadeğişme = client.channels.cache.get("918964715965800480");
    let logKanali = client.channels.cache.get("918964715965800480");
    let susturma = client.channels.cache.get("918964715965800480");
    let sağırlaştırma = client.channels.cache.get("918964715965800480");

    if (oldMember.channelID && !oldMember.serverMute && newMember.serverMute) return logKanali.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanalda yetkili tarafından **susturdu!**`).catch();
    if (!oldMember.channelID && newMember.channelID) return giriş.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanala **katıldı!**`).catch();
    if (oldMember.channelID && !newMember.channelID) return çıkış.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(oldMember.channelID).name}\` adlı sesli kanaldan **ayrıldı!**`).catch();
    if (oldMember.channelID && newMember.channelID && oldMember.channelID != newMember.channelID) return odadeğişme.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi ses kanalını **değiştirdi!** (\`${newMember.guild.channels.cache.get(oldMember.channelID).name}\` => \`${newMember.guild.channels.cache.get(newMember.channelID).name}\`)`).catch();
    if (oldMember.channelID && oldMember.selfMute && !newMember.selfMute) return susturma.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanalda kendi susturmasını **kaldırdı!**`).catch();
    if (oldMember.channelID && !oldMember.selfMute && newMember.selfMute) return susturma.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanalda kendini **susturdu!**`).catch();
    if (oldMember.channelID && oldMember.selfDeaf && !newMember.selfDeaf) return sağırlaştırma.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanalda kendi sağırlaştırmasını **kaldırdı!**`).catch();
    if (oldMember.channelID && !oldMember.selfDeaf && newMember.selfDeaf) return sağırlaştırma.send(`\`${newMember.guild.members.cache.get(newMember.id).displayName}\` üyesi \`${newMember.guild.channels.cache.get(newMember.channelID).name}\` adlı sesli kanalda kendini **sağırlaştırdı!**`).catch();
  };
});
