function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('62882009085754@s.whatsapp.net')}\nitem1.TEL;waid=62882009085754:62882009085754\nitem1.X-ABLabel:Hanya Seorang Manusia Biasa\nURL;My Github: https://github.com/Raihanlimit\nEMAIL;Email Owner: recell155@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My Number Bot;waid=19378825461:19378825461\nEND:VCARD`
}
  const kontak = {
        "displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6288233832771@s.whatsapp.net')}\nitem1.TEL;waid=6288233832771:6288233832771\nitem1.X-ABLabel:Busy.\nURL;My Github: https://github.com/Botwa021\nEMAIL;Email Owner: mursid@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My Number Bot;waid=6289674452300:6289674452300\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
