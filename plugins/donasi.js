let handler = async m => m.reply(`
╭─「 Donasi 」
│
│ DONASI SEIKHLASNYA BANG :)
│
│ - E-money
│ • 0882009085754 ( Dana/OVO/Gopay )
│
│ - PULSA
│ • 0882009085754 ( Smartfren )
│ • 085851642307 ( IM3 )
│
│ - Saweria
│ •https://saweria.co/Mochraihans
│
╰───────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
