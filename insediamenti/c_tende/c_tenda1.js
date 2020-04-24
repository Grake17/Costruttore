const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');


module.exports = (newMember,client,i) => {
    client.guilds.cache.get("697902605875019916").channels.create("⛺Tenda #"+(i+1),{
        type: "voice",
        position: newMember.channel.rawPosition,
        parent: config.parente,
        userLimit: 2
    }).then(channel => {
        newMember.setChannel(channel)        
    })

} 