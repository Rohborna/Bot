const discordTTS=require("discord-tts");
exports.run = async (ordinario,message,args)=>{
    const voiceChannel = message.member.voice.channel;      
if (!args[0]) {
        voiceChannel.join().then(connection => {
        const stream = discordTTS.getVoiceStream('Mandou o comando e não escreveu o que é para eu dizer, afi, que burro.','pt-BR');
        const dispatcher = connection.play(stream);});
}else{
    
    voiceChannel.join().then(connection => {
    const stream = discordTTS.getVoiceStream(args.join(' '),'pt-BR');
    const dispatcher = connection.play(stream);
        //dispatcher.on("finish",()=>voiceChannel.leave())
    });
}

  

}