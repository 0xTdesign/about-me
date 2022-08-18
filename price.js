// price
let tokens = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbinance-bitcoin%2Cavalanche-2%2Csolana%2Cchikn-egg%2Cbinance-coin-wormhole&vs_currencies=usd",

  method: "GET",
  headers: {},
};

$.ajax(tokens).done(function (response) {
  console.log(response);

  btc.innerHTML = response["binance-bitcoin"].usd;
  avax.innerHTML = response["avalanche-2"].usd;
  eth.innerHTML = response["ethereum"].usd;
  sol.innerHTML = response["solana"].usd;
  egg.innerHTML = response["chikn-egg"].usd;
  bnb.innerHTML = response["binance-coin-wormhole"].usd;
});
