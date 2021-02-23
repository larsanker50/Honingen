const playerCards = document.getElementById("playerCards");
const dealerCards = document.getElementById("dealerCards");
const resultaat = document.getElementById("resultaat");
const playerCard = document.getElementsByClassName("playerCard");
const dealerCard = document.getElementsByClassName("dealerCard");
let playerCardsArray = [];
let dealerCardsArray = [];
let usedCardsArray = [];
let gedeeld = false
let scoreDealer = 0
let scorePlayer = 0

//dit stukje code maakt de kaart objecten aan in de Deck class
class Deck {
    constructor(value, symbol, rank) {
        this.value = value;
        this.symbol = symbol;
        this.rank = rank;
    };
  };

let card1 = new Deck(2, "heart", 2);
let card2 = new Deck(3, "heart", 3);
let card3 = new Deck(4, "heart", 4);
let card4 = new Deck(5, "heart", 5);
let card5 = new Deck(6, "heart", 6);
let card6 = new Deck(7, "heart", 7);
let card7 = new Deck(8, "heart", 8);
let card8 = new Deck(9, "heart", 9);
let card9 = new Deck(10, "heart", 10);
let card10 = new Deck(10, "heart", "jack");
let card11 = new Deck(10, "heart", "queen");
let card12 = new Deck(10, "heart", "king");
let card13 = new Deck(11, "heart", "ace");
let card14 = new Deck(2, "club", 2);
let card15 = new Deck(3, "club", 3);
let card16 = new Deck(4, "club", 4);
let card17 = new Deck(5, "club", 5);
let card18 = new Deck(6, "club", 6);
let card19 = new Deck(7, "club", 7);
let card20 = new Deck(8, "club", 8);
let card21 = new Deck(9, "club", 9);
let card22 = new Deck(10, "club", 10);
let card23 = new Deck(10, "club", "jack");
let card24 = new Deck(10, "club", "queen");
let card25 = new Deck(10, "club", "king");
let card26 = new Deck(11, "club", "ace");
let card27 = new Deck(2, "diamond", 2);
let card28 = new Deck(3, "diamond", 3);
let card29 = new Deck(4, "diamond", 4);
let card30 = new Deck(5, "diamond", 5);
let card31 = new Deck(6, "diamond", 6);
let card32 = new Deck(7, "diamond", 7);
let card33 = new Deck(8, "diamond", 8);
let card34 = new Deck(9, "diamond", 9);
let card35 = new Deck(10, "diamond", 10);
let card36 = new Deck(10, "diamond", "jack");
let card37 = new Deck(10, "diamond", "queen");
let card38 = new Deck(10, "diamond", "king");
let card39 = new Deck(11, "diamond", "ace");
let card40 = new Deck(2, "spade", 2);
let card41 = new Deck(3, "spade", 3);
let card42 = new Deck(4, "spade", 4);
let card43 = new Deck(5, "spade", 5);
let card44 = new Deck(6, "spade", 6);
let card45 = new Deck(7, "spade", 7);
let card46 = new Deck(8, "spade", 8);
let card47 = new Deck(9, "spade", 9);
let card48 = new Deck(10, "spade", 10);
let card49 = new Deck(10, "spade", "jack");
let card50 = new Deck(10, "spade", "queen");
let card51 = new Deck(10, "spade", "king");
let card52 = new Deck(11, "spade", "ace");
let card53 = new Deck(12, "joker", "joker" );
let card54 = new Deck(12, "joker", "joker" );


function randomPlayerCard() {

    let random = Math.floor((Math.random() * 54) + 1);
    let card = ("card" + random);
    if (usedCardsArray.includes(card.toString()) == false) {
        playerCardsArray.push(eval(card));
        usedCardsArray.push(card.toString());
    } else if (usedCardsArray.length < 54){
        randomPlayerCard();
      }}

function randomDealerCard() {
    let random = Math.floor((Math.random() * 54) + 1);
    let card = ("card" + random);
    if (usedCardsArray.includes(card.toString()) == false) {
      dealerCardsArray.push(eval(card));
      usedCardsArray.push(card.toString());
}  else if (usedCardsArray.length < 54){
    randomDealerCard();
}}


document.getElementById("delenKnop").addEventListener("click", function() {
    if (gedeeld == false) {
        while (usedCardsArray.length < 54) {
            randomPlayerCard()
            randomDealerCard()
            }
    
            let divplayer = playerCards.appendChild(document.createElement("div"));
            divplayer.classList.add("playerCard");
            playerCard[0].innerHTML = "Honing"+"\n"+"kaarten"+"\n"+"deck";
            playerCard[0].classList.add("brown");

            let divdealer = dealerCards.appendChild(document.createElement("div"));
            divdealer.classList.add("dealerCard");
            dealerCard[0].innerHTML = "Honing"+"\n"+"kaarten"+"\n"+"deck";
            dealerCard[0].classList.add("brown");
    
    
            console.log(dealerCardsArray.length)
            console.log(playerCardsArray.length)
            
            document.getElementById("delenKnop").innerHTML = "Volgende Kaart"
            }
    if (gedeeld == true) {
    playerCard[0].innerHTML = "Honing"+"\n"+"kaarten"+"\n"+"deck";
    playerCard[0].classList.add("brown");
    playerCard[0].classList.remove("diamond", "heart", "spade", "joker", "club")
    dealerCard[0].innerHTML = "Honing"+"\n"+"kaarten"+"\n"+"deck";
    dealerCard[0].classList.add("brown");
    dealerCard[0].classList.remove("diamond", "heart", "spade", "joker", "club")
    console.log(dealerCardsArray.length)
    console.log(playerCardsArray.length)
    }
    gedeeld = true
    })

document.getElementById("beurtKnop").addEventListener("click", function() {
    playerCard[0].innerHTML = ((playerCardsArray[0].symbol)+",\n"+(playerCardsArray[0].rank));
    playerCard[0].classList.add(playerCardsArray[0].symbol);
    playerCard[0].classList.remove("brown");
    dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol)+",\n"+(dealerCardsArray[0].rank));
    dealerCard[0].classList.add(dealerCardsArray[0].symbol);
    dealerCard[0].classList.remove("brown");
    scorePlayer = playerCardsArray[0].value
    scoreDealer = dealerCardsArray[0].value
    if (scorePlayer > scoreDealer) {
        resultaat.innerHTML = "Speler heeft de kaart gewonnen"
        playerCardsArray.push(dealerCardsArray[0])
        playerCardsArray.push(playerCardsArray[0])
        playerCardsArray.shift();
        dealerCardsArray.shift();
    } else if (scorePlayer < scoreDealer) {
        resultaat.innerHTML = "Computer heeft de kaart gewonnen"
        dealerCardsArray.push(playerCardsArray[0])
        playerCardsArray.shift();
    } else if (scorePlayer == scoreDealer) {                                    // hij loopt hier ergens nog vast. de [0] van de winnende kaart maar achteraan gepusht worden. zoals bij de eerste playercardsarra ding
        scorePlayer = playerCardsArray[1].value
        scoreDealer = dealerCardsArray[1].value
        if (scorePlayer > scoreDealer) {
            resultaat.innerHTML = "Speler heeft de kaart gewonnen"
            playerCardsArray.push(dealerCardsArray[0])
            dealerCardsArray.shift();
            playerCardsArray.push(dealerCardsArray[0])
            dealerCardsArray.shift();
        } else if (scorePlayer < scoreDealer) {
            resultaat.innerHTML = "Computer heeft de kaart gewonnen"
            dealerCardsArray.push(playerCardsArray[0])
            playerCardsArray.shift();
            dealerCardsArray.push(playerCardsArray[0])
            playerCardsArray.shift();
    }
    }
})