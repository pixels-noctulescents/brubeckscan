const constants = {
    DATA_CONTRACT: "0x3a9a81d576d83ff21f26f325066054540720fc34",
    DATA_GRAPH_URL: "https://api.thegraph.com/subgraphs/name/streamr-dev/data-on-polygon",
    STREAMR_ETH_ADDRESS: "0x3979f7d6b5c5bfa4bcd441b4f35bfa0731ccfaef",
    MAINNET_TIMESTAMP: 1640995200,
    PAIRS: ["BTCUSDT", "DATAUSDT", "EURUSDT"],
    BINANCE_PRICE_TICKER_URL: "https://api.binance.com/api/v3/ticker/price?symbol=",
    BRUBECK_APY: "https://brubeck1.streamr.network:3013/apy",
    BRUBECK_STATS: "https://brubeck1.streamr.network:3013/stats",
    BRUBECK_NODE_REWARDS_BASE: "https://brubeck1.streamr.network:3013/datarewards/",
    BRUBECK_NODE_STATS_BASE: "https://brubeck1.streamr.network:3013/stats/",
};

Object.freeze(constants);

export { constants };
