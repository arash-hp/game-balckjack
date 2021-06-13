let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sound/1.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-dealer-button').addEventListener('click', blackjackDealer);


function blackjackHit() {
    showCard(YOU)
}

function showCard(activePlayer){
    let cardImag = document.createElement('img');
    cardImag.src = 'img/k.png';
    cardImag.style = 'width:100px';
    document.querySelector(activePlayer['div']).appendChild(cardImag);
    hitSound.play();
}

function blackjackDealer(){
    let yourImages=document.querySelector('#your-box').querySelectorAll('img');
    console.log(yourImages)
}

