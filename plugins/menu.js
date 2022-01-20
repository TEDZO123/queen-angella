const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/1pOfIIf.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💝TEDZO SIR BOT💝━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 asluser 𝐛𝐨𝐭.
            *⫷⫸ᴀsʟᴜ sᴇʀ ʙᴏᴛ⫷⫸*
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/1pOfIIf.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💝TEDZO SIR BOT💝━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 asluser 𝐛𝐨𝐭.
            *⫷⫸ᴀsʟᴜ sᴇʀ ʙᴏᴛ⫷⫸*

╭────────────────╮
│  *ASLUSIR MENU*
│
╰────────────────╯
╭────────────────╮
   TEDZO SIR BOT
╰────────────────╯
🍂 ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ 🎻 ᴀᴅᴅ
│ 🎻 ᴋɪᴄᴋ
│ 🎻 ᴍᴜᴛᴇ
│ 🎻 ᴜɴᴍᴜᴛᴇ
│ 🎻 ᴘʀᴏᴍᴏᴛᴇ
│ 🎻 ᴅᴇᴍᴏᴛᴇ
│ 🎻 ɪɴᴠɪᴛᴇ
│ 🎻 ʀᴇᴠᴏᴋᴇ
│ 🎻 ᴊᴏɪɴ
│ 🎻 ᴡᴇʟᴄᴏᴍᴇ
│ 🎻 ɢᴏᴏᴅʙʏᴇ
│ 🎻 ʙᴀɴʙʏᴇ
│ 🎻 ʟᴇғᴛ
│ 🎻 ᴡᴀʀɴ
│ 🎻 ᴠᴏᴛᴇ
│ 🎻 ᴛᴀɢ
╰────────────────
  📤 ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ 🎭 ʏᴛᴠ
│ 🎭 ʏᴛs
│ 🎭 sᴏɴɢ
│ 🎭 ᴠɪᴅᴇᴏ
│ 🎭 ɪɴsᴛᴀ
│ 🎭 sᴛᴏʀʏ
│ 🎭 ғʙ
│ 🎭 ɪᴍɢ
│ 🎭 ᴛᴡɪᴛᴛᴇʀ
│ 🎭 ᴘɪɴᴛʀᴇsᴛ
│ 🎭 ᴍᴇᴅɪᴀғɪʀᴇ
╰────────────────
🌿 ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ 🍒 ᴡᴀsᴛᴇᴅ
│ 🍎 ᴛʀɪɢɢᴇᴅ
│ 🍒 ʜɪsᴛᴏ
│ 🍎 ᴠᴇᴄᴛᴏʀ
│ 🍒 ᴀᴠᴇᴄ
│ 🍎 ᴍᴘ3
│ 🍒 sᴛɪᴄᴋᴇʀ
│ 🍎 ᴘʜᴏᴛᴏ
│ 🍒 ʀᴇᴠᴇʀᴄᴇ
│ 🍎 ᴄᴜᴛ
│ 🍒 ᴛʀɪᴍ
│ 🍎 ʀᴏᴛᴀᴛᴇ
│ 🍒 ᴍᴇʀɢᴇ
│ 🍎 ᴄᴏᴍᴘʀᴇss
│ 🍒 menu
│ 🍎 ᴛʀᴇʙʟᴇ
│ 🍒 ᴘɪᴛᴄʜ
│ 🍎 ʟᴏᴡ
│ 🍒 ᴛᴛs
│ 🍎 ᴜɴᴠᴏɪᴄᴇ
│ 🍒 ᴠᴏɪᴄᴇ
│ 🍎 ʀᴇᴍᴏᴠᴇʙɢ
│ 🍒 ᴀᴛᴛᴘ
│ 🍎 ᴇᴍᴏᴊɪ
│ 🍒 ғɪɴᴅ
│ 🍎 ᴛʀᴛ
│ 🍒 ᴘʟᴜɢɪɴ
│ 🍎 ᴘʟᴜɢɪɴ ʟɪsᴛ
│ 🍒 ʀᴇᴍᴏᴠᴇ
│ 🍎 ғɪʟᴛᴇʀ
│ 🍒 ᴊɪᴅ
│ 🍎 ʙʟᴏᴄᴋ
│ 🍒 ᴜɴʙʟᴏᴄᴋ
│ 🍎 sᴇᴛᴀʙᴏᴜᴛ
│ 🍒 sᴇᴛsᴛᴀᴛᴜs
│ 🍎 ᴛᴀᴋᴇ
│ 🍒 ʙʀᴏᴀᴅᴄᴀsᴛ
│ 🍎 ᴜʀʟ
│ 🍒 ᴡʜᴏɪs
│ 🍎 sʜᴇᴅᴜʟᴇ
│ 🍒 ᴘɪɴɢ
╰────────────────
💢 ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ 📍 ʀᴇsᴛᴀʀᴛ
│ 📌 sʜᴜᴛᴅᴏᴡɴ
│ 📍 sᴇᴛᴠᴀʀ
│ 📌 ɢᴇᴛᴠᴀʀ
│ 📍 ᴀʟʟᴠᴀʀ
│ 📌 ᴜᴘᴅᴀᴛᴇ
│ 📍 ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
╰────────────────
`}) 

}));

`}) 

}));
