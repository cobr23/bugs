require("./database/module")

//GLOBAL PAYMENT
global.storename = "☠︎︎ ɪᴍᴀʟᴋᴀ ʜᴀɴꜱᴀᴍᴀʟ"
global.dana = "94711262551"
global.qris = "gada qris gw anjg"

// GLOBAL SETTING
global.owner = "94711262551"
global.namabot = "ꜱᴘɪᴅᴇʀ ʙᴜɢ ʙᴏᴛ🦄"
global.nomorbot = "94711262551"
global.namaCreator = "☠︎︎ ɪᴍᴀʟᴋᴀ ʜᴀɴꜱᴀᴍᴀʟ"
global.linkyt = ""
global.autoJoin = false
global.antilink = false
global.versisc = '2.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = ''
global.isLink = 'https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31'
global.packname = "❃ɪᴍᴀʟᴋᴀ ʜᴀɴꜱᴀᴍᴀʟ❃"
global.author = "☠︎︎ ɪᴍᴀʟᴋᴀ ʜᴀɴꜱᴀᴍᴀʟ"
global.jumlah = "5"
ownernumber1 : process.env.ownernumber1 === undefined ? '94711262551' : process.env.ownernumber1



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
