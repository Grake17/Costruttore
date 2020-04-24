const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');

//require
const c_tenda1 = require("./c_tende/c_tenda1")
const c_tenda2 = require("./c_tende/c_tenda2")

const c_campo1 = require("./c_campi/c_campo1")
const c_campo2 = require("./c_campi/c_campo2")


const c_spedizione1 = require("./c_spedizioni/c_spedizione1")
const c_spedizione2 = require("./c_spedizioni/c_spedizione2")

//Variabili
let i = 0
let o = 0
let u = 0

module.exports = (oldMember, newMember,client) => {

    //Crea Canali
    if(newMember.channelID == config.tenda){        
        c_tenda1(newMember,client,i)
        i++
    }else if(newMember.channelID == config.campo){        
        c_campo1(newMember,client,o)
        o++
    }else if(newMember.channelID == config.spedizione){
        c_spedizione1(newMember,client,u)        
        u++
    }

    //Cancella Canali    
    if(oldMember.channel != null){    
        if(oldMember.channel.name.startsWith("⛺Tenda")){
            c_tenda2(oldMember)
        }else if(oldMember.channel.name.startsWith("⛺Campo")){
            c_campo2(oldMember)
        }else if(oldMember.channel.name.startsWith("⛺Spedizione")){
            c_spedizione2(oldMember)
        }
    }else if(oldMember.channel != null){
        if(newMember.channel != null){
            if(newMember.channelID == config.tenda){
                c_tenda2(oldMember)
            }else if(newMember.channelID == config.campo){
                c_campo2(oldMember)
            }else if(newMember.channelID == config.spedizione){
                c_spedizione2(oldMember)
            }  
        }
    }
}