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
        message.author.sendMessage('s!help Pour affiché les aides concernant le bot')
        message.author.sendMessage('s!kick Pour kick un joueur du serveur (En développement)')
        message.author.sendMessage('Bot développé par ScorpionVEVO')
        message.channel.sendMessage('Aide envoyée en mp !')
    }
    if(message.content === '!ban'){
        if(!msg.member.permissions.has('ADMINISTRATOR')) return message.reply('Tu n\'est pas un admin');
        const member = message.mentions.first();
        if(!member) return message.reply('Utilisation incorecte, utilise !ban @Utilisateur#1234');
        member.ban();
        }
    })
