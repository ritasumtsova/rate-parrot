import { getCryptoRate } from "../services/cryptoService.js";

export function cryptoCommands(bot) {
  bot.onText(/\/btc/, async (msg) => {
    const rate = await getCryptoRate("bitcoin");
    bot.sendMessage(msg.chat.id, `🦜 BTC = ${rate} USD`);
  });

  bot.onText(/\/eth/, async (msg) => {
    const rate = await getCryptoRate("ethereum");
    bot.sendMessage(msg.chat.id, `🦜 ETH = ${rate} USD`);
  });

  bot.onText(/\/usdt/, async (msg) => {
    const rate = await getCryptoRate("tether");
    bot.sendMessage(msg.chat.id, `🦜 USDT = ${rate} USD`);
  });

  bot.onText(/\/crypto (.+)/, async (msg, match) => {
    const coin = match[1].toLowerCase().trim();
    try {
      const rate = await getCryptoRate(coin);
      bot.sendMessage(msg.chat.id, `🦜 ${coin.toUpperCase()} = ${rate} USD`);
    } catch (e) {
      bot.sendMessage(msg.chat.id, `Не вдалося знайти крипту: ${coin}`);
    }
  });
}
