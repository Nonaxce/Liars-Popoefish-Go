"use strict";

import { k } from "./engine.js";


k.loadSprite("beans", "assets/images/bee.png");
k.loadSpriteAtlas("assets/images/cards_spritesheet.png", {
    "card_base": {
        x: 0,
        y: 0,
        width: 22,
        height: 32,
    },
})

