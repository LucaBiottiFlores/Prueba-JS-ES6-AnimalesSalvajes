/* 
//////////////////// PRIMER INTENTO FALLIDO //////////////////////
//////////////////// NO ES NECESARIO REVISAR /////////////////////
//////////////////// SOLO ES REGISTRO DE MI DERROTA //////////////
*/

// ////// CLASES /////

// //////Super Clase Animal/////

// class Animal {
//     constructor (name, age, img, comments, sound){
//         this.name = name;
//         this.age = age;
//         this.img = img;
//         this.comments = comments;
//         this.sound = sound;
//     }

//     get Name() {
//         return this.name;
//     }

//     get Age() {
//         return this.age;
//     }

//     get Img () {
//         return this.img;
//     }

//     get comments () {
//         return this.comments;
//     }

//     get Sound () {
//         return this.sound;
//     }
// }

// //////// Animales ///////

// class Lion extends Animal {
//     constructor (name, age, img, comments, sound, roar) {
//         super(name, age, img, comments, sound)
//         this.roar = roar;
//     }

//     roar () {
//         const roarAudioElement = document.querySelector("#roarId");
//         roarAudioElement.play();
//     }

// }

// class Wolf extends Animal {
//     constructor (name, age, img, comments, sound, howl) {
//         super(name, age, img, comments, sound)
//         this.howl = howl;
//     }

// }

// class Bear extends Animal {
//     constructor (name, age, img, comments, sound, growl) {
//         super(name, age, img, comments, sound)
//         this.growl = growl;
//     }
// }

// class Snake extends Animal {
//     constructor (name, age, img, comments, sound, hiss) {
//         super(name, age, img, comments, sound)
//         this.hiss = hiss;
//     }
// }

// class Hawk extends Animal {
//     constructor (name, age, img, comments, sound, squawk) {
//         super(name, age, img, comments, sound)
//         this.squawk = squawk;
//     }
// }

// // Variables que contienen DOM Elements//

// let ageElement = document.querySelector("#edad")
// let animalKindElement = document.querySelector("#animal")
// let commentsElement = document.querySelector("#comentarios")

// // Async/await para imgs //

// // INSTANCIAS //

// let firstLion = new Lion ("Gato con Melena", ageElement.value, "img", commentsElement.value, "roar", "")
