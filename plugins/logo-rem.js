let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya. Contoh Ren'
  m.reply('proses..')
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih Bang`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i
handler.limit = true

module.exports = handler
