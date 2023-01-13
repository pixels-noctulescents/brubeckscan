import { constants } from "../../configs/constants";

export async function getPrices() {
  try {
    const requests = constants.PAIRS.map((symbol) =>
      fetch(`${constants.BINANCE_PRICE_TICKER_URL}${symbol}`).then((res) =>
        res.json()
      )
    );

    const data = await Promise.all(requests);

    let prices: any = {};

    data.forEach((item) => {
      prices[item.symbol] = +item.price;
    });

    return prices;
  } catch (e) {
    throw e;
  }
}
