const fetch = require('node-fetch')  
 let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
     if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} ${pickRandom(['Ziv San','Fory'])}`
     let ziv = `https://api.violetics.pw/api/ephoto360/${command}?apikey=aa37-2814-15e2&text=${text}`
     conn.sendButton(m.chat, 'https://telegra.ph/file/28f709a2a84758d9c9286.jpg', `Tunggu Sebentar Lagi Di Proses...\n\nKalo Error/Bug Silakan Chat 
@${global.owner[1]}`, wm, 'Owner', '.owner', m)
     conn.sendButton(m.chat, ziv, 'Nih', wm3, 'Thanks', 'thanks', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: `Req Fitur ${command}`,
            body: wm,
          thumbnail: await (await fetch('https://telegra.ph/file/56c7e6e8466c7e77a90c2.jpg')).buffer()
        }
     }
    })
 } 
 handler.help = ['1917', '3d-crack-text-effect-online', '3d-underwater', '3d-wood', '3d-wood2', '3damerican-flag', '3dgalaxy-metal', '3dgold', '3dgradient', '3dgradient2', '3dmetal-effect', '3dmetal-text-', '3dmulticolor-papercut', '3dpig-gif', '3drose-gold', '3druby-stone', '3dsand-engraved', '3dshiny-metallic', '3dsilver', '3dspace', '3dsparkle-christmas', '3dstone', '3dsub-zombie', '3dtext-effect', '3dtext-effect2', '3dtext-effect3', '3dtext-pig', '3dvalentine-cards', '3dvintage-light-bulb', '3dxmas-cards', '3dxmas-cards2', '83day-card', '83day-card2', '83day-card3', '83day-card4', 'advanced-glow', 'ahri-league-of-legends', 'alice-league-of-kings', 'amily-arena-of-valor', 'angels-wings', 'anonymous-neon', 'art-shader', 'avengers', 'azzenka-league-of-kings', 'balloon-noel', 'balloon-text', 'balloons-cards', 'balloons-love', 'bats-halloween'].map(v => v + ' <teks>') 
 handler.tags = ['maker'] 
 handler.command = /^(1917|3d-crack-text-effect-online|3d-wood2|3damerican-flag|3dgalaxy-metal|3dgold|3dgradient|3dgradient2|3dmetal-effect|3dmetal-text-|3dmulticolor-papercut|3dpig-gif|3drose-gold|3druby-stone|3dsand-engraved|3dshiny-metallic|3dsilver|3dspace|3dsparkle-christmas|3dstone|3dsub-zombie|3dtext-effect|3dtext-effect2|3dtext-effect3|3dtext-pig|3dvalentine-cards|3dvintage-light-bulb|3dxmas-cards|3dxmas-cards2|83day-card|83day-card2|83day-card3|83day-card4|advanced-glow|ahri-league-of-legends|alice-league-of-kings|amily-arena-of-valor|angels-wings|anonymous-neon|art-shader|avengers|azzenka-league-of-kings|balloon-noel|balloon-text|balloons-cards|balloons-love|bats-halloween)$/i 
 handler.limit = true

 module.exports = handler
