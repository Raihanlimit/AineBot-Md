let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya. Contoh: Ren|Bot'
  m.reply('Proses...')
  let res = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `Done Sir`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i
handler.limit = true

module.exports = handler