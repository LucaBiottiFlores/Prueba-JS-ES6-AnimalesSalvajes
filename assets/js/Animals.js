// Import de la super clase Animal //

import { Animal } from "./Animal.js";

//////// Animales ///////

export class Lion extends Animal {
  roar() {
    this.playerPlay();
  }
}

export class Wolf extends Animal {
  howl() {
    this.playerPlay();
  }
}

export class Bear extends Animal {
  growl() {
    this.playerPlay();
  }
}

export class Snake extends Animal {
  hiss() {
    this.playerPlay();
  }
}

export class Hawk extends Animal {
  squawk() {
    this.playerPlay();
  }
}
