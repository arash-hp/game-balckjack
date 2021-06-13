let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sound/1.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-dealer-button').addEventListener('click', blackjackDealer);


function blackjackHit() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}
function showCard(card, activePlayer) {
    let cardImag = document.createElement('img');
    cardImag.src = `img/${card}.png`;
    cardImag.style = 'width:100px';
    document.querySelector(activePlayer['div']).appendChild(cardImag);
    hitSound.play();
}

function blackjackDealer() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
}
