const sleep = m => new Promise(r => setTimeout(r, m));
var Coin = document.getElementById("coin");
var degrees = 0;
var coinImages = new Array("url('./assets/img/head.png')","url('./assets/img/tail.png')");
var headAwards = new Array("3% de descuento","4% de descuento","5% de descuento");
var randomImage;
var coinResult;

Coin.onclick = async function() {      
  degrees += 2880;  
  
  Coin.style.MozTransform = "rotateY(" + degrees + "deg)";
  Coin.style.msTransform = "rotateY(" + degrees + "deg)";
  Coin.style.OTransform = "rotateY(" + degrees + "deg)";
  Coin.style.transform = "rotateY(" + degrees + "deg)";  

  GetRandomValue(coinImages);
  await sleep(2000);  
  Coin.style.backgroundImage = coinImages[randomValue];
  coinResult = randomValue;  
  Award(coinResult);
}

function GetRandomValue(data) {
    randomValue = Math.floor(Math.random() * data.length);
    return randomValue;
}

function Award(coinResult) {
    GetRandomValue(headAwards);

    switch(coinResult) {
        case 0:            
            alert(headAwards[randomValue]);
            break;
        case 1:
            alert("Te cumplimos tu sueño...")
            break;
    }
}