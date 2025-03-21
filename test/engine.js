"use strict";

import kaboom from "./libs/kaplay.mjs";

export const k = kaboom({
    canvas: document.getElementById("gameCanvas"),
    width: 320,
    height: 240,
    scale: 2,
    background: [0, 0, 0],
});
