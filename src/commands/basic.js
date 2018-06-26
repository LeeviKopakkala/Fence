fence.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    //Ignore other bots
    if(message.author.bot) return;
    // Ignore !commands
    if(message.content.indexOf(botconfig.prefix) !== 0) return;

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    // Regular commands
  if(command === "mammamia") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send("https://www.youtube.com/watch?v=unfzfe8f9NI");  
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

});