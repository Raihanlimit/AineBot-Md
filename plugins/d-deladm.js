let handler = async (m, { conn, usedPrefix, isAdmin, isBotAdmin }) => {
if (!isAdmin) return m.reply("Delete pesan member hanya tersedia untuk admin only")
if (!isBotAdmin) return m.reply("Bot tidak dapat menghapus pesan member, karena bot bukan admin grup!!")
let key = m.quoted ? m.key : m.quoted.vM.key
conn.sendMessage(m.chat, {
    delete: key
})
}
handler.help = ['deladm']
handler.tags = ['group']
handler.command = /^deladm$/i
module.exports = handler
