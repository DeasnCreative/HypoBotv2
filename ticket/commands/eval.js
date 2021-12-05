const Discord = require("discord.js");
const sahip = "478600256951549953";
exports.run = async (client, message, args) => {
  const arez = client.users.cache.get(sahip);
  const sami = client.users.cache.get("852608747813077052")
  if(message.author.id !== arez.id){
    if(message.author.id !== sami.id)
    
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setAuthor(
          `${client.user.username} EVAL Sistemi`,
          client.user.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTitle(`Başarısız!`)
        .setDescription(
          `Bu komutu sadece **${arez.tag}** ve **${sami.tag}** kullanabilir.`
        )
        .setFooter(
          `Developed by ${arez.tag}`,
          arez.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTimestamp()
    )};
    
  /*return message.channel.send(
    new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle("Bak şuan kullandın kardeşim.")
      .setImage("https://media1.tenor.com/images/6206bffba306962abf15cd54553c6091/tenor.gif?itemid=17894624")
    )*/
  try {
    let arezkod = args.join(" ");
    let arezck = eval(arezkod);
    if (!arezkod)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#FF0000")
          .setAuthor(
            `${client.user.username} EVAL Sistemi`,
            client.user.displayAvatarURL({ dynamic: true, format: "png" })
          )
          .setTitle(`${client.arez.hayırr} Başarısız!`)
          .setDescription(
            `${client.arez.ünlem} Çalıştırmayı denemek için bir kod belirtmelisin!`
          )
          .setFooter(
            `Developed by ${arez.tag}`,
            arez.displayAvatarURL({ dynamic: true, format: "png" })
          )
          .setTimestamp()
      );
    if (typeof code !== "string")
      arezck = require("util").inspect(arezck, { depth: 0 });
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#66FF00")
        .setAuthor(
          `${client.user.username} EVAL Sistemi`,
          client.user.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTitle(`${client.arez.ok} Başarılı!`)
        .addField("» Giriş", `\`\`\`js\n${arezkod}\n\`\`\``)
        .addField("» Çıkış", `\`\`\`js\n${arezck}\n\`\`\``)
        .setFooter(
          `Developed by ${arez.tag}`,
          arez.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTimestamp()
    );
  } catch (e) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setAuthor(
          `${client.user.username} EVAL Sistemi`,
          client.user.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTitle(`${client.arez.hayırr} Başarısız!`)
        .addField("» Hata", `\`\`\`js\n${e}\`\`\``)
        .setFooter(
          `Developed by ${arez.tag}`,
          arez.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setTimestamp()
    );
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kod"],
  permLevel: 0
};
module.exports.help = { 
  name: "eval", 
  usage: "", 
  description: "" 
};