let fetch = require('node-fetch')
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {
	if (!args[0]) return conn.reply(m.chat, `Silahkan masukan pesannya\nContoh Penggunaan: ${usedPrefix + command} ${nomorowner} pesan untuknya`, m)
	let mention
    if (m.isGroup) mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else mention = m.sender
	if (!mention) throw 'Tag salah satu lah'
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let pengirim = m.sender
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : wa.me/${pengirim.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	let cap = `${htki} PENGIRIM MENFES ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya

Contoh: ${usedPrefix + command} ${nomorown} hai`
	if (!m.quoted) {
		await conn.sendHydrated(mention, tujuan, cap, thumbdoc, 'https://wa.me/' + pengirim.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
	} else {
		await conn.sendHydrated(mention, tujuan, cap, thumbdoc, 'https://wa.me/' + pengirim.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, true).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : wa.me/${pengirim.split("@s.whatsapp.net")[0]}

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	await conn.reply(pengirim, suks, m)
}
handler.help = ['menfess <pesan>']
handler.tags = ['main']
handler.command = /^(men(fess?|confess|cret)|chat)$/i
handler.limit = true
handler.private = true
module.exports = handler
