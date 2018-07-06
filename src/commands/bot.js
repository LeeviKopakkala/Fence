var config = require('config-json')
config.setBaseDir('./config');

// Basic bot configuration from your Discord App -> Bot
config.load("config.json");

var token = config.get('token');

fence.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    //Ignore other bots
    if(message.author.bot) return;
    // Ignore !commands
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    // Regular commands
  if(command === "reset") {
    message.delete().catch(O_o=>{}); 
    resetBot(message.channel);
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting')
    .then(msg => fence.destroy())
    .then(() => fence.login(token));
}