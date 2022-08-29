let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
	let _muptime

    let teks = `\n\t\t*「 \t ${clockString(process.uptime())} \t」*\n`
conn.sendMessage(m.chat, {text: teks, jpegThumbnail:  global.thumb}, { quoted: m} )
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(up|run)time$/i
module.exports = handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
