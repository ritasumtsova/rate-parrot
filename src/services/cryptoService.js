export async function getCryptoRate(coin = "bitcoin") {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
  const res = await fetch(url);
  const data = await res.json();
  return data[coin].usd;
}