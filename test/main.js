"use strict";

import { k } from "./engine.js";    
import "./loader.js"; // This will run the content of the file, importing all assets

import { Deck } from "./classes/Deck.js";





// rest of scenes code
k.scene("play", () => {
    // play scene code
    k.onDraw(() => {
        k.drawSprite({
            sprite: "beans",
            pos: vec2(0, 0),
        });
    })


    const deck = new Deck()
    deck.initDeck();
    console.log(deck.get());
    
    

});


k.go("play");