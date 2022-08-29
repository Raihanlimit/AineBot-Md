let fs = require('fs')
let handler = async (m, { conn, args, command }) => {

    let teks = `\n\t\t*「 \t ${clockString(process.uptime())} \t」*\n`
conn.sendMessage(m.chat, {text: teks, jpegThumbnail:  global.thumb}, { quoted: m} )
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(up|run)time$/i
module.exports = handler

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms % (3600 * 24) / 3600)
	let m = isNaN(ms) ? '--' : Math.floor(ms % 3600 / 60)
	let s = isNaN(ms) ? '--' : Math.floor(ms % 60)
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}