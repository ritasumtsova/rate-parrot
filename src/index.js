import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { startCommand } from "./commands/start.js";
import { cryptoCommands } from "./commands/crypto.js";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

startCommand(bot);
cryptoCommands(bot);