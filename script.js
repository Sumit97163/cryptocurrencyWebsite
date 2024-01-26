let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let dogh = document.getElementById("dogecoin");
var settings = {
    "async": true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
            "method":"GET",
            "headers":{},

}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    dogh.innerHTML = response.dogecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    // dogh.innerHTML = response.dogicoin.usd;

});