"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const google_translate_api_1 = __importDefault(require("@vitalets/google-translate-api"));
const TOKEN = '5393522570:AAGQIgVyqUI9IOrgKL4IL2aKtcmkOWx5_5c';
const bot = new node_telegram_bot_api_1.default(TOKEN, { polling: true });
let i = 0;
bot.on('message', (message, metadata) => {
    const chatId = message.chat.id;
    if (message.text == '/start') {
        bot.sendMessage(chatId, `Salom <b>${message.from.first_name} </b>😄 \n Men sizga english tilini o'rganishda yordam beraman. \n Menga shunchagi <b>Uzbek</b> tilini qandaydir so'z yuboring men sizga <b>English</b> tiliga tarjima qilib yuboraman OKEY boshladikmi <b>Do'stim</b>😉 Menga so'z yuboring `, {
            parse_mode: 'HTML',
        });
        i = 1;
    }
    else if (i == 1) {
        let text = message.text;
        function trans() {
            return __awaiter(this, void 0, void 0, function* () {
                let result = yield (0, google_translate_api_1.default)(text, { from: 'uz', to: 'en' });
                yield bot.sendMessage(chatId, result.text);
            });
        }
        trans();
    }
});
