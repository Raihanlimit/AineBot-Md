const { WAMessageStubType } = require('@adiwajshing/baileys')
const { format } = require('util')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

handler.all = async function(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, 'Kamu telah di blokir oleh bot karena telah melanggar aturan bot\n\n*Dilarang menelepon BOT!*', null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}
module.exports = handler
