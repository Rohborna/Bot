exports.run = async (ordinario, message) => {
	const ms = await message.channel.send("Ping?");
	
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.floor(ordinario.ping) + 'ms');
	
}