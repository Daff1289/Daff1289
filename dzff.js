const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/download/tiktok")
const facebook = require("./baseikal/download/facebook")
const instagram = require("./baseikal/download/instagram")
const twitter = require("./baseikal/download/twitter")


//MODULNYA BY DAFF
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 

global.gr = 'https://chat.whatsapp.com/Hf97D2zKimrEs8o81iqIUv'
global.ig = 'daff.botz' // ubah aja
global.email = 'daffbotz123@gmail.com' //serah
global.region = 'Russia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DAFFBOTZ XD' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6281295532922'] // ubah aja pake nomor lu
//==========================BY DAFFBOTZ=======================//
global.keyopenai = `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`
//====================BY DAFFBOTZ=============================//
global.botname = 'DAFFBOTZ XD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝕯𝕬𝕱𝕱𝕭𝕺𝕿𝖅 𝖃𝕯' // ubah aja ini nama sticker
global.author = '𝕯𝕬𝕱𝕱' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'dafff' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
