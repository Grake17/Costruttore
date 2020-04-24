const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');


module.exports = (newMember,client,u) => {
    client.guilds.cache.get("697902605875019916").channels.create("⛺Spedizione #"+(u+1),{
        type: "voice",        
        parent: config.parente,
        position: newMember.channel.rawPosition,
        userLimit: 6       
    }).then(channel => {
        newMember.setChannel(channel)
    })
} 