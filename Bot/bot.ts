import { Telegraf } from "telegraf";
const TOKEN = "6708675445:AAEbyNIVaUiiPQhPwb2BRCtRIoJIEXvevGg";
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-mini-app-v7oj.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
