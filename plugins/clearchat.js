async function handler(m, { conn }) {
try {
conn.chatModify({
delete: true,
lastMessages: [{key: m.key, messageTimestamp: m.messageTimestamp}]
},
m.chat)
m.reply("chat ini telah dihapus pada whatsapp bot")
} catch {
m.reply("hapus chat gagal :(")
}

}
handler.help = ['clearchat'],
handler.tags = ['group'],
handler.command = /^clearchat$/i
handler.owner = true
module.exports = handler
