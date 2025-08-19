import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { startCommand } from "./commands/start.js";
import { cryptoCommands } from "./commands/crypto.js";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: false,
  webHook: {
    port: process.env.PORT,
  },
});

bot.deleteWebHook().then(() => {
  console.log("Old webhook deleted");

  return bot.setWebHook(`${URL}/bot${TOKEN}`, {
    secret_token: SECRET,
  });
}).then(() => {
  console.log(`Webhook set to ${URL}/bot${TOKEN}`);
}).catch(err => {
  console.error("Webhook setup error:", err);
});


startCommand(bot);
cryptoCommands(bot);

console.log(`Bot is running on port ${process.env.PORT}`);
