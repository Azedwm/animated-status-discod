const discord  = require('discord.js-self');
const client = new discord.Client();
const token = "" // <======= put your token here
const ownername = "Abolfazl#0009" 
const status = [
  "dnd", 
  "idle", 
  "online"
]

client.on('ready', () => {  
    console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    var stats = status[Math.floor(Math.random()*status.length)];
    console.log(`Status Changed`);
    client.user.setPresence({
        status: stats,
        }
      )
  }, 1000);

    });

client.login(token);

// by Abolfazl#9000
