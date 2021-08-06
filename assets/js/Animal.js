/////////// SUPER CLASE ANIMAL ///////////

export class Animal {
  #comments;
  constructor(name, age, img, comments, sound) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.#comments = comments;
    this.sound = sound;
  }

  get Name() {
    return this.name;
  }

  get Age() {
    return this.age;
  }

  get Img() {
    return this.img;
  }

  get comments() {
    return this.#comments;
  }

  set comments(newComment) {
    this.#comments = newComment;
  }

  get Sound() {
    return this.sound;
  }

  //// Metodo para ir a buscar el archivo de audio ///
  playerPlay() {
    const player = document.querySelector("#player");
    player.setAttribute("src", `/assets/sounds/${this.sound}`);
    player.load();
    player.play();
  }
}
