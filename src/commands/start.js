export function startCommand(bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      `🦜 Hello! I'm your RateParrot pal 📊\n\n` +
      `I can provide exchange rates for cryptocurrencies.\n\n` +
      `📌 Cryptocurrency commands:\n` +
      `/btc - Bitcoin price\n` +
      `/eth - Ethereum price\n` +
      `/usdt - Tether price\n` +
      `/crypto <name> - get the price of any cryptocurrency (e.g., pepe, ena, xrp, bome, wif, tao)\n\n` +
      `💡 Example: /crypto pepe`
    );
  });
}