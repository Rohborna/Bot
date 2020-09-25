exports.run = async (ordinario, message) => {
  const Discord = require("discord.js");

  const embed = {
	"title": "Nossos Comandos",
	"color": 7413919,
	"fields": [
	  {"name": "Posto","value":"Para ver a localização de posto de gasolina no setor"},
	  {"name": "MapaBunker","value":"Para visualizar a planta do bunker"},
	  {"name": "Musica","value":"Para ouvir Música"},
	  {"name": "Fala","value":"Para que o bot fale o que digitar"},
	  {"name": "Delete","value":"Para deletar mensagens"},
	  {"name": "Help","value":"Para conhecer os comandos"},
	  {"name": "Ping","value":"Para verificar se o Bot esta online" },
	  {"name": "Reload","value":"Para recarregar um comando atualizado"},
	  {"name": "Server","value":"Para ver status de Servidores"},
	  {"name": "Kick","value":"Para kickar um Ordinario"}
	]
  };
  message.reply({ embed });

}