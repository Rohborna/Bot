module.exports = (ordinario, message) => {
    if (message.author.bot) return;
    if (message.channel.type ==="dm") return;
    if (message.channel.id != 755052763528036433) return;
    
    const args = message.content.slice(ordinario.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = ordinario.commands.get(command);
  
    if (message.content.indexOf(ordinario.config.prefix) !== 0) return;
  
    if (!cmd) return message.channel.send("Comando não localizado. Para mais informações, consulte !help");
    cmd.run(ordinario, message, args);
  };