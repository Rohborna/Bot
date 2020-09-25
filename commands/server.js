exports.run = (ordinario, message, args) => {
  const config = require('../config.json');
  var request = require('request');
  if (!args || args.length < 1)
    return message.reply("⚠️ Informe o servidor que deseja consultar");


  switch (args.join(' ').toLowerCase()) {
    case "adrenalina":
      infoServer(config.adrenalina);
      break;
      
    case "bandit":
      infoServer(config.bandit);
      break;

    case "matrix":
      infoServer(config.matrix);
      break;

      case "just survival":
      infoServer(config["just survival"]);
      break;

      case "new jack city":
      infoServer(config["new jack city"]);
      break;

      case "scumbion":
      infoServer(config.scumbion);
      break;

      default:
        message.channel.send("Servidor ainda não parametrizado.");
  }

  function infoServer(idServer) {
    request(`https://api.battlemetrics.com/servers/${idServer}`, function (error, response, body) {
      console.log(body)
      var parsedBody = JSON.parse(body);
      let date = new Date(parsedBody.data.attributes.createdAt)
      const embed = {
        "title": parsedBody.data.attributes.name,
        "color": 7413919,
        "fields": [
          {
            "name": "Jogadores Online",
            "value": "```" + parsedBody.data.attributes.players + "```",
            "inline": true
          },
          {
            "name": "Slots",
            "value": "```" + parsedBody.data.attributes.maxPlayers + "```",
            "inline": true
          },
          {
            "name": "status",
            "value": "```" + parsedBody.data.attributes.status + "```",
            "inline": true
          },
          {
            "name": "Local",
            "value": "```" + parsedBody.data.attributes.country + "```",
            "inline": true
          },
          {
            "name": "Rank",
            "value": "```" + parsedBody.data.attributes.rank + "```",
            "inline": true
          },
          {
            "name": "Criado em",
            "value": "```" + date.toLocaleDateString('pt-BR') + "```",
            "inline": true
          }
        ]
      };
      message.channel.send({ embed });
    })
  }
};