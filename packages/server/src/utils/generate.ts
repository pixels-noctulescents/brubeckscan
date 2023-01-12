import type { Node } from "@brubeckscan/common/types";

const generate = () => { };

generate.randomGradient = () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const backgroundColor = `linear-gradient(${randomIntFromInterval(
    0,
    360
  )}deg, ${getRandomColor()} 0%, ${getRandomColor()} 50%, ${getRandomColor()} 100%)`;

  return backgroundColor;
};

generate.emptyNode = (): Node => {
  const node: Node = {
    address: "",
    polygonScanURL: "",
    identiconURL: "",
    staked: 0,
    rewards: 0,
    sent: 0,
    toBeReceived: 0,
    lastClaim: null,
    payouts: [],
    claimCount: 0,
    claimPercentage: 0,
    claimedRewardCodes: [],
    status: false,
  };

  return node;
}

export { generate };
