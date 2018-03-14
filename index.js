const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Je suis bo");
    console.log("Le bot a bien été connecté");
})

bot.login("NDIzNDc1ODYzODI1NDE2MjEz.DYq4jg.SwsI6LO1RhryZ7IgQMyyiIg6SS4");

bot.on('message', function (message){
    if(message.content === '!ping') {
        message.reply('pong')
    }
})

bot.on('message', function (message){
    if(message.content === '!help'){
        message.channel.sendMessage('Aide du bot discord: ')
        message.channel.sendMessage('Bot développé par ScorpionVEVO')
    }
})
