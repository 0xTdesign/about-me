// price
let tokens = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=binance-bitcoin%2Cavalanche-2%2Cethereum%2Csolana%2Cchikn-egg%2Cbinance-coin-wormhole%2Cshiba-inu-wormhole%2Cbinance-peg-cardano%2Cbinance-peg-dogecoin%2Cbinance-peg-xrp&vs_currencies=usd",

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
  ada.innerHTML = response["binance-peg-cardano"].usd;
  xrp.innerHTML = response["binance-peg-xrp"].usd;
  shib.innerHTML = response["shiba-inu-wormhole"].usd;
  doge.innerHTML = response["binance-peg-dogecoin"].usd;
  bnb.innerHTML = response["binance-coin-wormhole"].usd;
});
