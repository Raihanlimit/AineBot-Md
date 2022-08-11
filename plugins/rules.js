let handler = async m => m.reply(`

*RULES BOT*
-JANGAN SPAM BOT
-JANGAN TELPON/VC BOT
-JANGAN CHAT BOT/OWNER UNTUK MINTA SAVE
*MELANGGAR?* ( *BANED PERMANEN* )

Donasi
  - E-money
  • 0882009085754 ( Dana/OVO/Gopay )

  - PULSA
  • 0882009085754 ( Smartfren )
  • 085851642307 ( IM3 )

  - Saweria
  • https://saweria.co/Mochraihans

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rul(es|aturan)$/i

module.exports = handler
