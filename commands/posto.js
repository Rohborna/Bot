const Discord = require("discord.js");

exports.run = async (ordinario, message, args) => {

    if (!args[0]) return message.channel.send("Favor informar o setor");

    let img;

    switch (args[0].toLowerCase()) {
        case "a1":
            img = "a1.png"
            break;

        case "a2":
            img = "a2.png"
            break;

        case "a3":
            img = "a3.png"
            break;

        case "a4":
            img = "a4.png"
            break;
        case "b1":
            img = "b1.png"
            break;

        case "b2":
            img = "b2.png"
            break;

        case "b3":
            img = "b3.png"
            break;

        case "b4":
            img = "b4.png"
            break;
        case "c1":
            img = "c1.png"
            break;

        case "c2":
            img = "c2.png"
            break;

        case "c3":
            img = "c3.png"
            break;

        case "c4":
            img = "c4.png"
            break;
        case "d1":
            img = "d1.png"
            break;

        case "d2":
            img = "d2.png"
            break;

        case "d3":
            img = "d3.png"
            break;

        case "d4":
            img = "d4.png"
            break;
        
            default:
                message.channel.send("Setor informado não localizado.");
    }
    const attachment = new Discord
        .MessageAttachment(`./images/gasStation/${img}`, img);
    const embed = new Discord.MessageEmbed()
        .setTitle(`Localização do posto em ${args[0].toUpperCase()}`)
        .setColor(7413919)
        .attachFiles(attachment)
        .setImage(`attachment://${img}`);

    message.reply({ embed });
}