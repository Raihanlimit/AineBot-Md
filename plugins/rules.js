let handler = async m => m.reply(`

*RULES BOT*
-JANGAN SPAM BOT
-JANGAN TELPON/VC BOT
-JANGAN CHAT BOT/OWNER UNTUK MINTA SAVE
*MELANGGAR?* ( *BANED PERMANEN* )

Donasi
 • Dana/OVO/Pulsa [Smartfren]
 - 0882009085754
 • Saweria
 - https://saweria.co/Mochraihans

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rul(es|aturan)$/i

module.exports = handler
