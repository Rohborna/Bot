exports.run = (ordinario, message, [mention, ...reason]) => {
  if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
  return message.reply("⚠️ Desculpe, você não tem permissão para usar isto!");   

    if (message.mentions.members.size === 0)
      return message.reply("⚠️ Você deve mencionar o usuário a levar Kick");    
  
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`✔️ ${member.user.username} Levou um belo de um Kick 👍.`);
    });
  };