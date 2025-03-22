"use strict";

import { k } from "./engine.js";            // get kaplay context    
import "./loader.js";                      // This will run the content of the file, importing all assets

import { Deck } from "./classes/Deck.js";   // import game classes

const deck = new Deck()



// rest of scenes code
k.scene("play", () => {
    // play scene code
    k.onDraw(() => {
        k.drawSprite({
            sprite: "card_base",
            pos: k.vec2(k.center()),
        });
    })
});


k.go("play");