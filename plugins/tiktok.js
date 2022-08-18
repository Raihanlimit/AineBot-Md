/*
const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
🔗 *Url:* ${url}
🧏 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ''}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.limit = true
handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler
*/


const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    tiktokdlv3(args[0]).then(r => {
    let video = r.video.no_watermark
    conn.sendFile(m.chat, video, '', `*${wm}*`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = false

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler

/*
const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    m.reply('Sedang diproses...')
    conn.sendFile(m.chat, url, 'tiktok.mp4', `*© Aine*
`.trim(), m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tik|tt|tiktok)$/i

module.exports = handler
*/

