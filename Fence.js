
// Load up the discord.js library
global.Discord = require("discord.js");

global.fence = new Discord.Client();

// Basic bot configuration from your Discord App -> Bot
config = require(".config/config.json");

// Customize your bot
botconfig = require(".config/botconfig.json");

// Startup function
fence.on("ready", () => {
  console.log('Fence has started'); 
  fence.user.setActivity(`Fence - A Discord Bot Framework`);
});

// Commands
require("./src/commands/admin.js");
require("./src/commands/basic.js");
require("./src/commands/helpers.js");

fence.login(config.token);
           