const discordTTS=require("discord-tts");
exports.run = async (ordinario,message,args)=>{
       
    const voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
        const stream = discordTTS.getVoiceStream('tchau seus putos.','pt-BR');
        const dispatcher = connection.play(stream);
        dispatcher.on("finish",()=>voiceChannel.leave())
    });

}