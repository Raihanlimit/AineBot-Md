let limit = 50
// const { servers, yta } = require('../lib/y2mate')
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  // let server = (args[1] || servers[0]).toLowerCase()
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0]))
  let audio, link = '', lastError
  for (let i in _audio) {
    try {
      audio = _audio[i]
      link = await audio.download()
      if (link) break
    } catch (e) {
      lastError = e
      continue
    }
  }
  if (!link) throw lastError
  // let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < audio.fileSize
  if (!isY) conn.sendFile(m.chat, dl_link, title + '.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* ${title}
│• *Type:* MP3
┆• *📥 Ukuran File:* ${filesizeF}
└❏
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: true, contextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
        }
     }
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.limit = true
handler.exp = 0
module.exports = handler
