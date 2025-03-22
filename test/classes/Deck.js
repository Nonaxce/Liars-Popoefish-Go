"use strict";


class Card {
    #suit;
    #type;
    constructor(suit, type) {
        this.#suit = suit;
        this.#type = type;
    }

    suit() {
        return this.#suit;
    }

    type() {
        return this.#type;
    }
}



export class Deck {
    #deck = [];
    constructor() {
        this.initDeck()
    }

    get() {
        return this.#deck;
    }


    initDeck() {
        const cardSuits = ["clubs", "diamonds", "hearts", "spades"];
        const cardTypes = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        // create every combination of card
        for (let suitIdx = 0; suitIdx < cardSuits.length; suitIdx++) {
            for (let typeIdx = 0; typeIdx < cardTypes.length; typeIdx++) {
                const newCard = new Card(cardSuits[suitIdx], cardTypes[typeIdx]);

                this.#deck.push(newCard);
            }
        }
    }

    take(amount = 1) {
        // avoid out of bound accessing
        if (this.#deck.length - amount < 0) return;
        // default to 1 if value is pathetic
        if (amount <= 0) amount = 1;
        // return an obj if amount is 1
        if (amount === 1) return this.#deck.shift();        
        // return array if >1    
        const na = [];
        for(let i = 0; i < amount; i++) {
            na.push(this.#deck.shift());
        };
        return na;
    }

    shuffle() {
        const s_deck = this.#deck;
       
        for (let i = s_deck.length; i > 0; i--) {
        
            if (i === s_deck.length) {
                continue;
            }

            
            // swap two cards randomly
            const randIdx = Math.floor(Math.random() * s_deck.length);
            console.log(randIdx);
            // swap the cards
            const temp = s_deck[randIdx];
            s_deck[randIdx] = s_deck[i];
            s_deck[i] = temp;

        }
        
        
        this.#deck = s_deck;
    }
    
}