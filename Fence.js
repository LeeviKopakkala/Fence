var config = require('config-json')
config.setBaseDir('./config');

// Load up the discord.js library
global.Discord = require("discord.js");

global.fence = new Discord.Client();

// Basic bot configuration from your Discord App -> Bot
config.load("config.json");

// Customize your bot

// Startup function
fence.on("ready", () => {
  console.log('Fence has started'); 
  fence.user.setActivity(`Fence - A Discord Bot Framework`);
});

global.token = config.get('token');
global.prefix = config.get('prefix');
console.log(prefix);

// Commands
require("./src/commands/admin.js");
require("./src/commands/basic.js");
require("./src/commands/helpers.js");


fence.login(token);
           