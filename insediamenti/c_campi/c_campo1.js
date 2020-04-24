const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');

module.exports = (newMember,client,o) => {
    client.guilds.cache.get(config.server).channels.create("⛺Campo #"+(o+1),{
        type: "voice",      
        parent: config.parente,
        position: newMember.channel.rawPosition,
        userLimit : 4
    }).then(channel => {
        newMember.setChannel(channel)
    })

}