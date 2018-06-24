
// Load up the discord.js library
global.Discord = require("discord.js");

global.client = new Discord.Client();
config = require("./config.json");

// Startup function
client.on("ready", () => {
  console.log('Bot has started'); 
  client.user.setActivity(`with Node.JS`);
});

// Commands
require("./src/commands/admin.js");
require("./src/commands/basic.js");

client.login(config.token);
           