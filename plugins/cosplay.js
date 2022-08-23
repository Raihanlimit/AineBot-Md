// wahai para para weaboo🗿
let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
	let url = 'https://kannxapi.herokuapp.com/api/randomimage/cosplay'
	conn.sendButton(m.chat, 'Watashiwa Anime Desu (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['internet']
handler.help = ['cosplay']
handler.premium = false
handler.limit = true

module.exports = handler
