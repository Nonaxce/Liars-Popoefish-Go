"use strict";


class Card {
    #suit;
    #type;
    constructor(suit, type) {
        this.#suit = suit;
        this.#type = type;
    }
}



export class Deck {
    #deck = [];
    constructor() {
        //
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

    takeACard() {
        if (this.#deck.length <= 0) return;
        return this.#deck.shift();
    }

    shuffle(reps = 1) {
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