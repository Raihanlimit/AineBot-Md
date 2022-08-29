let { Brainly } = require('brainly-scraper-v2')
const brainly = new Brainly('id')

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query'
	let res = await brainly.search(text, 'id').catch(() => null)
	console.log(res)
	if (res) {
		let answer = res.map(({ question, answers }, i) => `
*Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
*Jawaban Ke ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n' + '-'.repeat(45))
		m.reply(answer.trim())
	} else {
		let answer = await (await fetch(API('violetics', '/api/media/brainly', { query: text }, 'apikey'))).json()
		answer = answer.result
		if (!answer.length) throw 'Not found'
		for (let x = 0; x < answer.length; x++) {
			await m.reply(`*${answer[x].pertanyaan}*\n_${answer[x].source}_\n${answer[x].jawaban}`)
			await baileys.delay(2000)
		}
	}
}
handler.help = handler.alias = ['brainly']
handler.tags = ['internet']
handler.command = /^(brainly)$/i

handler.limit = true

module.exports = handler
