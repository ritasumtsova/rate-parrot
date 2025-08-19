import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { startCommand } from "./commands/start.js";
import { cryptoCommands } from "./commands/crypto.js";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  webHook: {
    port: process.env.PORT,
  },
});


bot.setWebHook(`${process.env.WEBHOOK_URL}/bot${process.env.BOT_TOKEN}`, {
  secret_token: process.env.SECRET_TOKEN,
});


startCommand(bot);
cryptoCommands(bot);

console.log(`Bot is running on port ${process.env.PORT}`);
