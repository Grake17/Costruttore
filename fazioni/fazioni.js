const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');



//require
const sala_p1 = require("./sala_p/sala_p1")
const sala_p2 = require("./sala_p/sala_p2")

const sala_s1 = require("./sala_s/sala_s1")
const sala_s2 = require("./sala_s/sala_s2")


const sala_c1 = require("./sala_c/sala_c1")
const sala_c2 = require("./sala_c/sala_c2")

//Variabili
let i = 0
let o = 0
let u = 0

module.exports = (oldMember, newMember,client) => {

    //Crea Canali
    if(newMember.channelID == config.sala_p){        
        sala_p1(newMember,client,i)
        i++
    }else if(newMember.channelID == config.sala_s){        
        sala_s1(newMember,client,o)
        o++
    }else if(newMember.channelID == config.sala_C){
        sala_c1(newMember,client,u)        
        u++
    }
    //Cancella Canali    
    if(oldMember.channel != null){    
        if(oldMember.channel.name.startsWith("🪓Covo")){
            sala_p2(oldMember)
        }else if(oldMember.channel.name.startsWith("📚Biblioteca")){
            sala_s2(oldMember)
        }else if(oldMember.channel.name.startsWith("✨Circolo")){
            sala_c2(oldMember)
        }
    //New & old != null
    }else if(oldMember.channel != null){
        if(newMember.channel != null){
            if(newMember.channelID == config.sala_p){
                sala_p2(oldMember)
            }else if(newMember.channelID == config.campo){
                sala_s2(oldMember)
            }else if(newMember.channelID == config.spedizione){
                sala_c2(oldMember)
            }  
        }
    }
}