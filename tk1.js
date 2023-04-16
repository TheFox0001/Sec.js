const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
if (client.user.username != 'Security' || client.user.id != '1072628133074849842') {
  window.close();
};
token = prompt('Enter Bot Token : ') ; 
client.login(token);
