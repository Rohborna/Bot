exports.run = async (ordinario, message, args) => {
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
  return message.reply("⚠️ Desculpe, você não tem permissão para usar isto!");   
  if (!args[0]) return message.channel.send("Favor informar a quantidade de mensagens a apagar.");
  
      let totalDelMsg = parseInt(args[0]) + 1;
      let apagadas = totalDelMsg - 1;
    
      async function clear() {
          try {
          message.delete();
          const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
          message.channel.bulkDelete(fetched);
          message.reply(`✔️  ${apagadas} Mensagens apagadas.`);
          } catch(e) {
              return message.reply("🤔 Algo de errado não está certo!");
          }
      }
      clear();
  }