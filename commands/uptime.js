const Discord = require('discord.js');
const os = require('os');
exports.run = (client, message) => {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];
    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }
    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }
    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }
    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }
    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    let myDate = new Date(client.readyTimestamp);
    const embed = new Discord.RichEmbed()
  .setThumbnail(message.author.iconURL)
  .addField(':runner: Servers:', `**${client.guilds.size.toLocaleString()}**`, true)
  .addField(':information_desk_person: Users:', `**${client.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString()}**`, true)
  .addField(':clipboard: Channels:', `**${client.channels.size.toLocaleString()}**`, true)
<<<<<<< HEAD
  .addField(":pcmemory: RAM", `**${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)**`, true)
=======
  .addField(":memory: RAM", `**${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)**`, true)
>>>>>>> b3212c029a79f0051cadf7273ab017022e882110
  .addField(':microphone2: Voice Connections:', `**${client.voiceConnections.size}**`, true)
//  .addField(':timer: Ready Timestamp', `**${client.readyAt}**`, true)
  .setFooter(`Ready Timestamp: ${myDate.toString()}`)
  .addField(':white_check_mark: Uptime:', dateString)
  .setColor(6583245);
    message.channel.send({embed})
  .catch(console.error); 
<<<<<<< HEAD
};
=======
};
>>>>>>> b3212c029a79f0051cadf7273ab017022e882110
