const Discord = require("discord.js");

exports.run = async (ordinario, message, args) => {

    if (!args[0]) return message.channel.send("Favor informar o setor");

    let img;

    switch (args[0].toLowerCase()) {
        case "a1":
            img = "Bunker_a1.jpeg"
            break;

        case "a2":
            img = "Bunker_a2.jpeg"
            break;

        case "a3":
            img = "Bunker_a3.jpeg"
            break;

        case "a4":
            img = "Bunker_a4.jpeg"
            break;
        case "b1":
            img = "Bunker_b1.jpeg"
            break;

        case "b2":
            img = "Bunker_b2.jpeg"
            break;

        case "b3":
            img = "Bunker_b3.jpeg"
            break;

        case "b4":
            img = "Bunker_b4.jpeg"
            break;
        case "c1":
            img = "Bunker_c1.jpeg"
            break;

        case "c2":
            img = "Bunker_c2.jpeg"
            break;

        case "c3":
            img = "Bunker_c3.jpeg"
            break;

        case "c4":
            img = "Bunker_c4.jpeg"
            break;
        case "d1":
            img = "Bunker_d1.jpeg"
            break;

        case "d2":
            img = "Bunker_d2.jpeg"
            break;

        case "d3":
            img = "Bunker_d3.jpeg"
            break;

        case "d4":
            img = "Bunker_d4.jpeg"
            break;
        
            default:
                message.channel.send("Setor informado não localizado.");
    }
    const attachment = new Discord
        .MessageAttachment(`./images/bunkers/${img}`, img);
    const embed = new Discord.MessageEmbed()
        .setTitle(`Mapa do Banker ${args[0].toUpperCase()}`)
        .setColor(7413919)
        .attachFiles(attachment)
        .setImage(`attachment://${img}`);

    message.reply({ embed });
}