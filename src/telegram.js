const TelegramBot = require('node-telegram-bot-api');
const token = '5154998319:AAFvsJ7SgL6JyJT0d8wHV8H9NUVorYVp1oY';
const bot = new TelegramBot(token, { polling: true });


bot.sendMessage("-640912411", "Новый заказ")