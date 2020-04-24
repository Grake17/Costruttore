const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


module.exports = async (oldMember) => {  
    let count = oldMember.channel.members.size                    
    if(count == 0){                                
        oldMember.channel.delete("ok")
    }
    
}