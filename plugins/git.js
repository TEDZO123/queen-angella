const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:QUEEN ANGELLA*
 
◼◼❏❏©𝚃𝙴𝙳𝚉𝙾 𝚂𝙸𝚁

*𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 : wa.me/917736835721?text=Hii%20tedzoMemes%20Sir.%20*

 *𝐓𝐎 𝐂𝐇𝐄𝐂𝐊 𝐔𝐏𝐃𝐀𝐓𝐄𝐒 .update   To update Bot .update now*

 *𝐁𝐎𝐓 𝐌𝐀𝐊𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 : ippo channel onnum illa*
     
 *Instagram id: https://www.instagram.com/a_s_l_a_m_._x?utm_medium=copy_link*

 *𝗪𝗘𝗕𝗦𝗜𝗧𝗘: website coming soon*

 *𝐆𝐈𝐓𝐇𝐔𝐁 𝐋𝐈𝐍𝐊 : https://github.com/TEDZO123/TEDZO-SIR-1*
 
*𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗚𝗣 : https://chat.whatsapp.com/JqUKjz9djTS9mDmxA2ph2t

 *🄰🅂🄻🅄 🅂🄸🅁 🄱🄾🅃 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘  𝙏𝙀𝘿𝙕𝙊 𝙎𝙄𝙍 *

 ◼◼❏❏©🄰🅂🄻🅄 ®𝚃𝚎𝚍𝚣𝚘
`}) 

}));
