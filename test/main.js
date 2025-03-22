"use strict";

import { k } from "./engine.js";            // get kaplay context    
import "./loader.js";                      // This will run the content of the file, importing all assets

import { Deck } from "./classes/Deck.js";   // import game classes


const deck = new Deck;

function createCardObj(x=0, y=0, card={}) {
    let cardColor = [];
    const suit = card.suit();

    // match the suit and color
    if (suit == "clubs" || suit == "spades") {
        cardColor = [100, 100, 100];
    } else if (suit == "diamonds" || suit == "hearts") {
        cardColor = [255, 0, 0];
    } else {
        return console.error(`empty card object : ${card}` );
    }

    const a = k.make([
        k.sprite("card_base"),
        k.color(cardColor),
        k.pos(x, y)
    ])

    return a;
}

// rest of scenes code
k.scene("play", () => {
    // play scene code
    deck.shuffle()
    const cards = deck.take(5);
    console.log(cards)

    let x = k.center().x - 100;
    let y = k.center().y - 100;

    
    for (let i = 0; i < cards.length; i++) {
    
        const c = cards[i];

        const a = createCardObj(x, y, c);
        k.add(a);
        x += 22 + 5;
        y += 10
    }
    
    
    
});

window.addEventListener('DOMContentLoaded', () => {
    k.go("play");
})
