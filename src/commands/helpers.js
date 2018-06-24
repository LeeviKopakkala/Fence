client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    //Ignore other bots
    if(message.author.bot) return;
    // Ignore !commands
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
  // Helper commands
  if(command === "help"){
      message.channel.send("Helper command")
  }

  if(command === "whoami"){
    message.channel.send("I'm a Discord Bot running on Fence Discord Bot Framework")
}

});