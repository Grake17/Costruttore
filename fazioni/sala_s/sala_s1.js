const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


module.exports = (newMember,client,o) => {
    client.guilds.cache.get("697902605875019916").channels.create("📚Biblioteca #"+(o+1),{
        type: "voice",
        position: newMember.channel.rawPosition,
        parent: config.parente,
        userLimit: 8
    }).then(channel => {
        newMember.setChannel(channel)        
    })

} 