const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.reply('Pong!');
  if (msg.content === 'everyone') 
  msg.chanel.send('@everyone Salut a tous!');
  if (msg.content === 'noteveryone') msg.reply('@everyone (noteveryone)salut a tous!')

  
});

client.login('NjE5ODcyMjUzMTg5OTQ3NDA5.XguNjA.RH2j3qhFWn1xfu8MRNFVbK4VRhM');