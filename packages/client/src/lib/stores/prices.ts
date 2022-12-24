import { writable } from "svelte/store";

export const prices = writable<RealTimePrices>({
  BTCUSDT: 0,
  DATAUSDT: 0,
  EURUSDT: 0,
});

export interface RealTimePrices {
  BTCUSDT: number;
  DATAUSDT: number;
  EURUSDT: number;
}
