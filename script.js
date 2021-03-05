const playerCards = document.getElementById("playerCards");
const dealerCards = document.getElementById("dealerCards");
const resultaat = document.getElementById("resultaat");
const playerCard = document.getElementsByClassName("playerCard");
const dealerCard = document.getElementsByClassName("dealerCard");
const amountPlayerCards = document.getElementById("amountPlayerCards");
const amountDealerCards = document.getElementById("amountDealerCards");
const drieBlieHTML = document.getElementById("drieBlie");
let playerCardsArray = [];
let dealerCardsArray = [];
let usedCardsArray = [];
let gedeeld = false;
let omgedraaid = false;
let drieBlieEvent = false;
let scoreDealer = 0;
let scorePlayer = 0;

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
let card10 = new Deck(11, "heart", "jack");
let card11 = new Deck(12, "heart", "queen");
let card12 = new Deck(13, "heart", "king");
let card13 = new Deck(14, "heart", "ace");
let card14 = new Deck(2, "club", 2);
let card15 = new Deck(3, "club", 3);
let card16 = new Deck(4, "club", 4);
let card17 = new Deck(5, "club", 5);
let card18 = new Deck(6, "club", 6);
let card19 = new Deck(7, "club", 7);
let card20 = new Deck(8, "club", 8);
let card21 = new Deck(9, "club", 9);
let card22 = new Deck(10, "club", 10);
let card23 = new Deck(11, "club", "jack");
let card24 = new Deck(12, "club", "queen");
let card25 = new Deck(13, "club", "king");
let card26 = new Deck(14, "club", "ace");
let card27 = new Deck(2, "diamond", 2);
let card28 = new Deck(3, "diamond", 3);
let card29 = new Deck(4, "diamond", 4);
let card30 = new Deck(5, "diamond", 5);
let card31 = new Deck(6, "diamond", 6);
let card32 = new Deck(7, "diamond", 7);
let card33 = new Deck(8, "diamond", 8);
let card34 = new Deck(9, "diamond", 9);
let card35 = new Deck(10, "diamond", 10);
let card36 = new Deck(11, "diamond", "jack");
let card37 = new Deck(12, "diamond", "queen");
let card38 = new Deck(13, "diamond", "king");
let card39 = new Deck(14, "diamond", "ace");
let card40 = new Deck(2, "spade", 2);
let card41 = new Deck(3, "spade", 3);
let card42 = new Deck(4, "spade", 4);
let card43 = new Deck(5, "spade", 5);
let card44 = new Deck(6, "spade", 6);
let card45 = new Deck(7, "spade", 7);
let card46 = new Deck(8, "spade", 8);
let card47 = new Deck(9, "spade", 9);
let card48 = new Deck(10, "spade", 10);
let card49 = new Deck(11, "spade", "jack");
let card50 = new Deck(12, "spade", "queen");
let card51 = new Deck(13, "spade", "king");
let card52 = new Deck(14, "spade", "ace");
let card53 = new Deck(15, "joker", "joker");
let card54 = new Deck(15, "joker", "joker");


function randomPlayerCard() {

    let random = Math.floor((Math.random() * 54) + 1);
    let card = ("card" + random);
    if (usedCardsArray.includes(card.toString()) == false) {
        playerCardsArray.push(eval(card));
        usedCardsArray.push(card.toString());
    } else if (usedCardsArray.length < 54) {
        randomPlayerCard();
    };
};

function randomDealerCard() {
    let random = Math.floor((Math.random() * 54) + 1);
    let card = ("card" + random);
    if (usedCardsArray.includes(card.toString()) == false) {
        dealerCardsArray.push(eval(card));
        usedCardsArray.push(card.toString());
    } else if (usedCardsArray.length < 54) {
        randomDealerCard();
    };
};


document.getElementById("delenKnop").addEventListener("click", function () {
    drieBlieHTML.innerHTML = "";
    if (gedeeld == false) {
        while (usedCardsArray.length < 54) {
            randomPlayerCard();
            randomDealerCard();
        };

        let divplayer = playerCards.appendChild(document.createElement("div"));
        divplayer.classList.add("playerCard");
        playerCard[0].innerHTML = "Honing" + "\n" + "kaarten" + "\n" + "deck";
        playerCard[0].classList.add("brown");

        let divdealer = dealerCards.appendChild(document.createElement("div"));
        divdealer.classList.add("dealerCard");
        dealerCard[0].innerHTML = "Honing" + "\n" + "kaarten" + "\n" + "deck";
        dealerCard[0].classList.add("brown");


        console.log(dealerCardsArray.length);
        console.log(playerCardsArray.length);

        document.getElementById("delenKnop").innerHTML = "Volgende beurt";
    };
    if (gedeeld == true) {
        if (playerCardsArray.length == 0) {
            resultaat.innerHTML = "Computer heeft het spel gewonnen";
            playerCards.innerHTML = "";
            playerCards.classList.remove("playerCard");
            return;
        } else if (dealerCardsArray.length == 0) {
            resultaat.innerHTML = "Speler heeft het spel gewonnen";
            dealerCards.innerHTML = "";
            dealerCards.classList.remove("dealerCard");
            return;
        };
        playerCard[0].innerHTML = "Honing" + "\n" + "kaarten" + "\n" + "deck";
        playerCard[0].classList.add("brown");
        playerCard[0].classList.remove("diamond", "heart", "spade", "joker", "club");
        dealerCard[0].innerHTML = "Honing" + "\n" + "kaarten" + "\n" + "deck";
        dealerCard[0].classList.add("brown");
        dealerCard[0].classList.remove("diamond", "heart", "spade", "joker", "club");
    };
    gedeeld = true;
    omgedraaid = false;
    amountPlayerCards.innerHTML = "De speler heeft op dit moment " + playerCardsArray.length + " kaarten op de stapel.";
    amountDealerCards.innerHTML = "De computer heeft op dit moment " + dealerCardsArray.length + " kaarten op de stapel.";
});

document.getElementById("beurtKnop").addEventListener("click", function () {
    if (playerCardsArray.length == 0) {
        resultaat.innerHTML = "Computer heeft het spel gewonnen";
        playerCards.innerHTML = "";
        playerCards.classList.remove("playerCard");
        return;
    } else if (dealerCardsArray.length == 0) {
        resultaat.innerHTML = "Speler heeft het spel gewonnen";
        dealerCards.innerHTML = "";
        dealerCards.classList.remove("dealerCard");
        return;
    };
    if (omgedraaid == false) {
        playerCard[0].innerHTML = ((playerCardsArray[0].symbol) + ",\n" + (playerCardsArray[0].rank));
        playerCard[0].classList.add(playerCardsArray[0].symbol);
        playerCard[0].classList.remove("brown");
        dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol) + ",\n" + (dealerCardsArray[0].rank));
        dealerCard[0].classList.add(dealerCardsArray[0].symbol);
        dealerCard[0].classList.remove("brown");
        scorePlayer = playerCardsArray[0].value;
        scoreDealer = dealerCardsArray[0].value;
        if (scorePlayer == 2 && scoreDealer == 15) {
            scoreDealer == 1
        };
        if (scoreDealer == 2 && scorePlayer == 15) {
            scorePlayer == 1
        };
        if (scorePlayer == 3) {
            let random = Math.floor((Math.random() * 5) + 1);
            if (random == 1) {
                scorePlayer = 100;
                drieBlieHTML.innerHTML = "Speler zegt: DRIE BLIE!!!!!";
            };
        };
        if (scoreDealer == 3) {
            let random = Math.floor((Math.random() * 5) + 1);
            if (random == 1) {
                scoreDealer = 100;
                drieBlieHTML.innerHTML = "Computer zegt: DRIE BLIE!!!!!";
            };
        };
        if (scorePlayer > scoreDealer) {
            resultaat.innerHTML = "Speler heeft de kaart gewonnen";
            playerCardsArray.push(dealerCardsArray[0]);
            playerCardsArray.push(playerCardsArray[0]);
            playerCardsArray.shift();
            dealerCardsArray.shift();
        } else if (scorePlayer < scoreDealer) {;
            resultaat.innerHTML = "Computer heeft de kaart gewonnen";
            dealerCardsArray.push(playerCardsArray[0]);
            dealerCardsArray.push(dealerCardsArray[0]);
            playerCardsArray.shift();
            dealerCardsArray.shift();
        } else if (scorePlayer == scoreDealer) {
            drieBlieHTML.innerHTML = "Iedereen zegt: BATTLE!!!!!";
            scorePlayer = playerCardsArray[1].value;
            scoreDealer = dealerCardsArray[1].value;
            if (scorePlayer > scoreDealer) {
                resultaat.innerHTML = "Speler heeft alle kaarten gewonnen";
                playerCardsArray.push(dealerCardsArray[0]);
                dealerCardsArray.shift();
                playerCardsArray.push(dealerCardsArray[0]);
                dealerCardsArray.shift();
                playerCardsArray.push(playerCardsArray[0]);
                playerCardsArray.shift();
                playerCardsArray.push(playerCardsArray[0]);
                playerCardsArray.shift();
            } else if (scorePlayer < scoreDealer) {
                resultaat.innerHTML = "Computer heeft alle kaarten gewonnen";
                dealerCardsArray.push(playerCardsArray[0]);
                playerCardsArray.shift();
                dealerCardsArray.push(playerCardsArray[0]);
                playerCardsArray.shift();
                dealerCardsArray.push(dealerCardsArray[0]);
                dealerCardsArray.shift();
                dealerCardsArray.push(dealerCardsArray[0]);
                dealerCardsArray.shift();
            } else {
                playerCardsArray.push(dealerCardsArray[0]);
                dealerCardsArray.push(playerCardsArray[0]);
                dealerCardsArray.shift();
                playerCardsArray.shift();
            };
        };
        amountPlayerCards.innerHTML = "De speler heeft op dit moment " + playerCardsArray.length + " kaarten op de stapel.";
        amountDealerCards.innerHTML = "De computer heeft op dit moment " + dealerCardsArray.length + " kaarten op de stapel.";
        omgedraaid = true;
        drieBlieEvent = false;
    };
});