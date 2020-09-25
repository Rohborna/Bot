const ytdl = require('ytdl-core');

exports.run = async (ordinario,message,args,ops)=>{
    if (!message.member.voice.channel) return message.channel.send('Favor se conectar a um canal e voz.');

    //if (!message.guild.me.voice.channel) return message.channel.send('Ja estou conectado');

    if (!args[0]) return message.channel.send('Nenhuma url Informada.');

    //if (!validate) return message.channel.send('Url Invalida');

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voice.channel.join();

    let dispatcher = await connection.play(ytdl(args[0],{filter:'audioonly'}));

    message.channel.send(`Tocando agora: ${info.videoDetails.title}`);
}