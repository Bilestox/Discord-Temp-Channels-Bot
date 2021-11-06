const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Started')
});

app.listen(3000, () => {
  console.log('Nexus Source');
});
const dotenv = require('dotenv')
const Discord = require("discord.js")
const client = new Discord.Client()
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');
const db = require("quick.db");
const prefix = "-"////Ur Prefix
client.login(process.env.token)
const fetch = require("node-fetch")
const linko = "https://example.example.repl.co" //Link For Start Your Bot 24/24 Without UptimeRobot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity(`${prefix}help`, { type: "PLAYING" }) //WATCHING, STREAMING, PLAYING, etc..

  client.user.setPresence("online") //online, dnd, etc..
})
setInterval(() => {
  fetch(linko)
  console.log(`${linko} Done Uptimed! 24/24`)
}, 90000)

const temp = JSON.parse(fs.readFileSync('./data/temp.json', 'utf8'));
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Create Temp Channel',
      channel : 'Create Temp Channel'
       }
        if(message.content.startsWith(prefix + 'temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Create Temp Channel', 'category').then(cg => {
           var ccc =message.guild.createChannel('Create Temp Channel', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === prefix + 'temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
                     if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
                    if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
    MOVE_MEMBERS:true,
     VIEW_CHANNEL:true
      })
       neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
          CONNECT:false,
           SPEAK:false
        })
               }
              })
             })
           })
          }
         fs.writeFile("./data/temp.json", JSON.stringify(temp), (err) => {
        if(err) console.error(err)
       })
      });
