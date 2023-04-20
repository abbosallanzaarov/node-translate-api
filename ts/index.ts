
import TelegramBot from 'node-telegram-bot-api'
import translate from '@vitalets/google-translate-api'
import { text } from 'express';
const TOKEN = '5393522570:AAGQIgVyqUI9IOrgKL4IL2aKtcmkOWx5_5c'


const bot = new TelegramBot(TOKEN, { polling: true })

let i = 0
bot.on('message', (message: any , metadata:any) => {
    const chatId = message.chat.id
    if (message.text == '/start') {
        bot.sendMessage(chatId, `Salom <b>${message.from.first_name} </b>😄 \n Men sizga english tilini o'rganishda yordam beraman. \n Menga shunchagi <b>Uzbek</b> tilini qandaydir so'z yuboring men sizga <b>English</b> tiliga tarjima qilib yuboraman OKEY boshladikmi <b>Do'stim</b>😉 Menga so'z yuboring `, {
            parse_mode: 'HTML',
        })
         i = 1
    }
        else if(i == 1){
        let text = message.text  
        async function trans() {
            let result = await translate(text , {from:'uz' , to:'en'})
            await  bot.sendMessage(chatId , result.text)
        }
        trans()
        }

  

})


