fence.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    //Ignore other bots
    if(message.author.bot) return;
    // Ignore !commands
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  if (command === "loop.mammamia") { 
    var hours = args.join(" ");
    console.log(hours);
    if (hours != "disable"){
        message.delete().catch(O_o=>{}); 
        global.loop = setTimeout (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("https://www.youtube.com/watch?v=unfzfe8f9NI")
            .catch(console.error); // add error handling here
            }, hours * 60000); 
        console.log(loop);
    }
  }

});
