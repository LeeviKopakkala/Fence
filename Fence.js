
// Load up the discord.js library
global.Discord = require("discord.js");

global.client = new Discord.Client();
config = require("./config.json");

// Startup function
client.on("ready", () => {
  console.log('Fence has started'); 
  client.user.setActivity(`Fence - A Discord Bot Framework`);
});

// Commands
require("./src/commands/admin.js");
require("./src/commands/basic.js");
require("./src/commands/helpers.js");

client.login(config.token);
           