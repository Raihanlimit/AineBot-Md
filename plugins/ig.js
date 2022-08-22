/*
let { instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
    if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
    const results = await instagramdlv3(args[0]).catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${await shortlink(url)}\n*${global.wm}*`, m)
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.group = false

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}*/


const { igdl } = require('../lib/scrape')
const { delay } = require("@adiwajshing/baileys")
let bo = require("@bochilteam/scraper")
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/.*(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`

 /* igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
    	await delay(2000)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*nih*', m)
    }
  }) */
  try {
 let a = await bo.instagramdlv2(args[0])
//let b = a[0].url.split("snapsave.app")[1]
await conn.sendFile(m.chat, a[0].url.split("snapsave.app")[1] ,null, "ini video nya", m)
} catch {
	try {
	let a = await bo.instagramdlv3(args[0])
//let b = a[0].url.split("snapsave.app")[1]
await conn.sendFile(m.chat, a[0].url ,null, "ini video nya", m)
} catch { throw "coba gunakan perintah .savefrom link"
}
}
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.alias = ["instagram", "igdl", "instagramdl"]
handler.tags = ['downloader']
//handler.command = /^(ig|instagram)$/i
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

module.exports = handler
