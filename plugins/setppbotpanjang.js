const fs = require('fs')
let handler = async (m, { conn, isROwner }) => {
 if (!isROwner) throw false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
var media = await q.download()
            let gc =  conn.user.jid
            var { img } = await generateProfilePicture(media)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: gc,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)
}
handler.help = ['setppbotpanjang']
handler.tags = ['owner']
handler.command = /^(setppbotpanjang)$/i

handler.owner = true

module.exports = handler

const Jimp = require('jimp')
async function generateProfilePicture(buffer) {
	const jimp_1 = await Jimp.read(buffer);
	const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(704, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 832)
	const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
	return {
	  img: await resz.getBufferAsync(Jimp.MIME_JPEG)
	}
}
