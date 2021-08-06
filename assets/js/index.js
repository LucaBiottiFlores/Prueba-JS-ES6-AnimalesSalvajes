///IMPORT DE SUB CLASES ANIMALES ///

import { Lion, Wolf, Bear, Snake, Hawk } from "./Animals.js";

//////////// Async/Await para obtener imágenes y los demás datos de cada animal //////////

(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();
  // Elementos del DOM //
  const animalNameElement = document.querySelector("#animal");
  const animalAgeElement = document.querySelector("#edad");
  const animalCommentsElement = document.querySelector("#comentarios");
  const animalImgElement = document.querySelector("#preview");
  const btnRegisterElement = document.querySelector("#btnRegistrar");
  const playerElement = document.querySelector("#player");
  const animalContainerElement = document.querySelector("#Animales");
  const modalElement = document.querySelector("#modal");

  // Arreglo en el cual se agregan los animales para el panel //

  const AnimalCards = [];

  /////// Ir a buscar la imagen cuando cambie el listado de nombres de animales //////
  animalNameElement.addEventListener("change", () => {
    const selectedAnimal = animalNameElement.value;
    const foundAnimal = Animales.find(
      (animal) => animal.name === selectedAnimal
    );

    animalImgElement.setAttribute("src", `/assets/imgs/${foundAnimal.imagen}`);
  });

  ////// Imprimir los animales que se crean en el panel "Animales en investigación" ///////

  btnRegisterElement.addEventListener("click", () => {
    const animalName = animalNameElement.value;
    const animalAge = animalAgeElement.value;
    const animalComments = animalCommentsElement.value;

    const foundAnimalData = Animales.find(
      (animal) => animal.name === animalName
    );

    // Arreglo que contiene los parametros de los animales que se van a crear //

    const params = [
      animalName,
      animalAge,
      foundAnimalData.imagen,
      animalComments,
      foundAnimalData.sonido,
    ];

    // Crear animales segun lo que se ingresó en el formulario //

    switch (animalName) {
      case "Leon":
        AnimalCards.push(new Lion(...params));
        break;
      case "Lobo":
        AnimalCards.push(new Wolf(...params));
        break;
      case "Oso":
        AnimalCards.push(new Bear(...params));
        break;
      case "Serpiente":
        AnimalCards.push(new Snake(...params));
        break;
      case "Aguila":
        AnimalCards.push(new Hawk(...params));
        break;
    }
    // Ejecutar función para renderizar en el panel ///
    renderAnimal();
  });

  ///  Funcion para renderizar animales en el panel con su respectiva imagen y botón con audio ////

  function renderAnimal() {
    ////Seleccionar elemento del DOM ///
    animalContainerElement.innerHTML = "";
    ///// Logica para reocrrer el arreglo declarado más arriba ////
    AnimalCards.forEach((animal) => {
      const DIVContainer = document.createElement("div");
      const animalIMG = document.createElement("img");
      const DIVcardButton = document.createElement("div");
      ////// Agregar elementos al DOM para que aparezcan el botón y la imagen dentro de la Card ////
      DIVContainer.classList.add("card");

      animalIMG.setAttribute("src", `/assets/imgs/${animal.img}`);
      animalIMG.classList.add("img-small");

      DIVcardButton.classList.add("card-footer", "p-0");

      DIVcardButton.innerHTML = `<button class="btn btn-primary btn-block">
            <img src="/assets/imgs/audio.svg" style="width: 10px" />
        </button>`;
      /////// Evento que crea un modal con información detallada del animal al dar click en la imagen //////
      animalIMG.addEventListener("click", () => {
        $("#modal").modal("show");

        const modalBodyElement = document.querySelector("#modal .modal-body");

        modalBodyElement.innerHTML = `
            <img src="/assets/imgs/${animal.img}" class="img-small" />
            <ul class="text-white">
                <li>Nombre: ${animal.name}</li>
                <li>Edad: ${animal.age} </li>
                <li>Comnetarios: ${animal.comments}</li>
            </ul>

            `;
      });
      ////////// Evento que reproduce el sonido al hacer click en el boton haciendo uso de la función de las instancias de animals /////
      DIVcardButton.addEventListener("click", () => {
        switch (animal.name) {
          case "Leon":
            animal.roar();
            break;
          case "Lobo":
            animal.howl();
            break;
          case "Oso":
            animal.growl();
            break;
          case "Serpiente":
            animal.hiss();
            break;
          case "Aguila":
            animal.squawk();
            break;
        }
      });

      DIVContainer.appendChild(animalIMG);
      DIVContainer.appendChild(DIVcardButton);

      animalContainerElement.appendChild(DIVContainer);
    });
  }
})();
