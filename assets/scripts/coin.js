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

async function Award(coinResult) {
    GetRandomValue(headAwards);

    const h2Award = document.getElementById('award');    
    h2Award.classList.remove("display");

    switch(coinResult) {
        case 0:
            await sleep(500);                        
            h2Award.innerHTML = headAwards[randomValue];                                    
            break;
        case 1:          
        await sleep(500);  
            h2Award.innerHTML = "Te cumplimos tu sueño...";                        
            break;
    }
}

/*function CleanH2Award() {

}*/