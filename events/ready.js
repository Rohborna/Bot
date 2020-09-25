module.exports = async ordinario => {
    

    console.log(`Ordinario Online com  ${ordinario.users.size}  usuários, em ${ordinario.channels.size}  canais de  ${ordinario.guilds.size} servidores`);
	
	ordinario.user.setActivity('Roleta Russa');
    let activityTypes = ['PLAYING','STREAMING','LISTENING','WATCHING']
    let activityGames =['Roleta Russa', 'CS GO', 'Poha Nenhuma', 'Scum']
   
    
    setInterval(function (){
        let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]
        let randomGames = activityGames[Math.floor((Math.random()*activityGames.length))]
       ordinario.user.setActivity(randomGames, { type: randomType })
    },45000)

	
	

}