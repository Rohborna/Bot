module.exports = async (ordinario, channel) => {
	
	ordinario.channels.cache.get("755062462168039525").send("Novo canal criado: " + channel.name);
}