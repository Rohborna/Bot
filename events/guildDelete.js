module.exports = (ordinario, guild) => {
  console.log(`[GUILD LEAVE] ${guild.name} (${guild.id}) Removeu o bot.`);
  
    if (ordinario.settings.has(guild.id)) {
      ordinario.settings.delete(guild.id);
    }
  };