"use strict";

import { k } from "./engine.js";    
import "./loader.js"; // This will run the content of the file, importing all assets

import { Deck } from "./classes/Deck.js";

const deck = new Deck()
deck.initDeck();


const A = deck.takeACard()
console.log(A)
console.log(deck.get());


// rest of scenes code
k.scene("play", () => {
    // play scene code
    k.onDraw(() => {
        k.drawSprite({
            sprite: "beans",
            pos: vec2(0, 0),
        });
    })

    
    
    
});


//k.go("play");