module.exports = async (ordinario, member) => {
	
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": ordinario.user.avatarURL,
		"text": "Data de saida"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Até logo",
		  "value": "Sentiremos sua falta"
		}
	  ]
	};
	ordinario.channels.cache.get("755052452516069427").send({embed});
}