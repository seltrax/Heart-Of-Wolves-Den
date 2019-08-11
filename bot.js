const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA5ODQwNzkzMjQ2NDk4ODQ1.XU8qLA.NIGr9lHWkRvEJDm9v6dRDnGhk5M';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message',msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token);

// THIS MUST BE THIS WAY
clent.login(process.env.BOT_TOKEN);
