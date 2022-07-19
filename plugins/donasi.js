let handler = async m => m.reply(`
╭─「 Donasi 」
│
│ - Pulsa/Dana/OVO
│ • [0882-0090-85754]
│
│ - Atau Bisa Melalui Link Berikut
│ • Saweria : https://saweria.co/Mochraihans
│
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
