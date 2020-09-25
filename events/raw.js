module.exports = async (ordinario, packet, message) => {

	if (!['MESSAGE_REACTION_ADD'].includes(packet.t)) return;
	const langs = require("../langs.js");
	const translate = require('@k3rn31p4nic/google-translate-api');
	const emoji = packet.d.emoji.name;

	const channel = ordinario.channels.cache.get(packet.d.channel_id);
	const msg = await ordinario.channels.cache.get(packet.d.channel_id).messages.fetch(packet.d.message_id).then(message => message);

	translate(msg.content, { to: langs[emoji].langs }).then(res => {
		const embed = {
			"color": 7413919,
			"fields": [
				{
					"name": "Tradução",
					"value": res.text,
				}]
		};

		msg.reply({ embed });

	}).catch(err => {
		console.error(err);
	});

}