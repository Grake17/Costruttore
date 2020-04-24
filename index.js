const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = process.env.token

client.login(token)

client.on("ready", () =>{
    console.log("connect as " + client.user.tag +" ")
})

//Require
const insediamenti = require("./insediamenti/insediamenti")
const fazioni = require("./fazioni/fazioni")

client.on("voiceStateUpdate", (oldMember,newMember) => {
    if(newMember.channel != null){
        if(newMember.channel.parent.id == config.parente1){
            insediamenti(oldMember,newMember,client)
            fazioni(oldMember,newMember,client)
        }else if(newMember.channel.parent.id == config.parente2){
            insediamenti(oldMember,newMember,client)
            fazioni(oldMember,newMember,client)
        }
    }
    if(oldMember.channel != null){
        if(oldMember.channel.parent.id == config.parente1){
            insediamenti(oldMember,newMember,client)
        }else if(oldMember.channel.parent.id == config.parente2){
            fazioni(oldMember,newMember,client)
        }
    }     
})