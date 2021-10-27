let pokemonRepository = (function (){
  let repository = [
     // {name: "Bulbasaur", size: 2.04, type: "water"},
     // {name: "Vulpix", size: 2.0, type: "fire"},
     // {name: "Growlithe", size: 2.04, type: "fire"},
     // {name: "Houndour", size: 2.0, type: ["dark", "fire"]},
     // {name: "Oddish", size: 1.08, type: ["grass", "poison"]},
     // {name: "Golem", size: 4.07, type: ["rock", "ground"]}
  ];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#pokemonModal");

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
        "name" in pokemon //&&
       //"detailsUrl" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct")
      }
    }
  
    function getAll() {
      return repository;
    }
     
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#pokemonModal")
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function(event){
        showDetails(pokemon)
      });
    }
    function loadList (){
      return fetch(apiUrl).then(function (response){
        return response.json();
      })
        .then(function (json) {
        json.results.forEach(function (item){
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);      
      })  
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      })
      .then(function (details) {
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(item){
      loadDetails(item).then(function () {
        showModal(item);
    });
   }
  
   
    function showModal(item) {
      console.log(item);
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");

      modalTitle.empty();
      modalBody.empty();
      
      //creating element for name in the modal content
      let nameElement = $("<h1>" + item.name + "</h1>");
      modalTitle.text(item.name);
      //creating img in modal content
      let imageElementFront = $(
        '<img class="modal-img" style="width:50%"/>');
      imageElementFront.attr =("src", item.imageUrlFront);
      imageElementBack = $('<img class="modal-img" style="width:50%">');
      imageElementBack.attr = ("src", item.imageUrlBack);
      //creating element for height in modal content
      let heightElement = $("<p>" + "height : " + item.height + "</p>");
      //creating  element for weight in modal content
      let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
      //creating element for types in modal content
      let typesElement = $("<p>" + "weight : " + item.type.map(t => t.type.name) + "</p>");
      

      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
    }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();
    
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

{
  "env": {
      "es6": true,
      "browser": true
  },
  "extends": [
      "eslint:recommended"
  ],
  "rules": {
      "quotes": ["error", "single"]
      console.error('Error when validating item', item);
  }
}