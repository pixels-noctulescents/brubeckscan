import { constants } from "../../configs/constants";

export async function getStats() {
  try {
    const urls = [constants.BRUBECK_APY, constants.BRUBECK_STATS];

    const requests = urls.map((url) => fetch(url).then((res) => res.json()));

    const data = await Promise.all(requests);

    return data;
  } catch (e) {
    throw e;
  }
}
