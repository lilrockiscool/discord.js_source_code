const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  
});
  
const activities_list = [
    "status 1",
    "status 2",
    "status 3"
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 5000);
});

client.login(token)
