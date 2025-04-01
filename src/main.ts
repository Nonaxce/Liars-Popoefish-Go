import { k } from "./engine"    //  get kaplay context
import "./loader";              // load all assets on start

k.loadRoot("./");
k.loadSprite("bean", "sprites/bean.png");

k.add([k.pos(120, 80), k.sprite("bean")]);

k.onClick(() => k.addKaboom(k.mousePos()));