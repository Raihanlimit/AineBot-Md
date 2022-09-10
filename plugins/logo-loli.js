let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya. Contoh:Ren'
  m.reply('Proses...')
  let res = `https://ziy.herokuapp.com/api/maker/lolimaker?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'loli.jpg', `Nih Cuy`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logololi)$/i
handler.limit = true

module.exports = handler
