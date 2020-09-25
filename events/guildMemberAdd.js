module.exports = async (ordinario, member) => {
	
	const embed = {
	  "color": 8311585,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": ordinario.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a)",
		  "value": "Leia as <#755056809861054514> para não tomar KICK/BAN e mantenha um bom relacionamento com o pessoal :sunglasses: "
		}
	  ]
	};
	ordinario.channels.cache.get("755056321153466509").send({embed});
}