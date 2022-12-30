const format = () => {};

format.ethAddress = (address: string) => {
  const start = address.slice(0, 5);
  const end = address.slice(-5);
  return `${start} ... ${end}`;
};

format.dataTokenAmount = (amount: string | number) => {
  return Math.round(+amount);
};

format.percentage = (percentage: string | number) => {
  const round = Math.round(+percentage * 100);
  return `${round} %`;
};

export { format };
