//PLUGIN BY SOURAVKL11 COPY WITH CREDIT

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'info', fromMe: false, desc: 'Shows bot information and creator info'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `` + Config.BOTSK + ` *BOT CREATED BY* DRIPS-MEMES
    
    ----- ` + Config.BOTSK + ` -----
    
╭─➤ 𝗜𝗡𝗙𝗢 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 »
│❖ *ᴀᴜᴛʜᴏʀ* : ᴀsʟᴀᴍ
│❖ *ᴋᴇʀɴᴇʟ* : ʟɪɴᴜx
│❖ *ɪɴꜱᴛᴀɢʀᴀᴍ* : `a_s_l_a_m_._x `
│❖ *ᴡʜᴀᴛꜱᴀᴘᴘ* :👇
| https://chat.whatsapp.com/JqUKjz9djTS9mDmxA2ph2t
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
               ` + Config.BOTSK + `
    
    ⚡ ᴛᴇᴅᴢᴏ sɪʀ ⚡
`}) 

}));
