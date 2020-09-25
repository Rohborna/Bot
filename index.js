const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const ordinario = new Discord.Client();

const config = require('./config.json');
ordinario.config= config;

var express = require('express');
var app     = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    ordinario.on(eventName, event.bind(null, ordinario));
  });
});

ordinario.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    ordinario.commands.set(commandName, props);
  });
});

ordinario.login(config.token);
