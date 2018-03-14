const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("En developpement, s!help");
    console.log("Le bot a bien été connecté");
})

bot.login("NDIzNDc1ODYzODI1NDE2MjEz.DYq4jg.SwsI6LO1RhryZ7IgQMyyiIg6SS4");

bot.on('message', function (message){
    if(message.content === 's!ping') {
        message.reply('pong')
    }
})

bot.on('message', function (message){
    if(message.content === 's!help'){
        var ap = String("'");
        message.author.sendMessage('Aide du bot discord: ')
        message.author.sendMessage('Bot développé par ScorpionVEVO')
        message.channel.sendMessage('Aide envoyée en mp !')
    }
})

bot.on('message', function (message){
    if(message.content === 's!boss'){
        message.channel.sendMessage('Mon dieu est @ScorpionVEVO#1505')
    }
})
