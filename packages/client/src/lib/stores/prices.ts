import { writable } from "svelte/store";
import type { RealTimePrices } from "@brubeckscan/common/types";

export const prices = writable<RealTimePrices>({
  BTCUSDT: 0,
  DATAUSDT: 0,
  EURUSDT: 0,
});
