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
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function(event){
        showDetails(pokemon)
      });
    }
    function loadList (){
      return fetch(apiUrl).then(function (response){
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item){
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);      
      })  
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        //add the details to the item here?
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      //need to add types in later exercise
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(item){
      loadDetails(item).then(function () {
      console.log(item);
    });
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
  
  console.log(pokemonRepository.getAll());

function showModal (){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');
}

function showModal (title, text){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');
}

//modalContainer.innerHTML = '';
//clears the existing modal content//

let modal = document.createElement('div');
modal.classList.add('modal');

//this adds new content below//
let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
//close button option added//

let titleElement = document.createElement('h1');
titleElement.innerText = title;

let contentElement = document.createElement('p');
contentElement.innerText = text;

modal.appendChild(closeButtonElement);
modal.appendChild(titleElement);
modal.appendChild(contentElement);
modalContainer.appendChild(modal);

modalContainer.classList.add('is-visible');

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal Title', 'This is the modal content!');
});




 //pokemonRepository.add({name: "Charizard", size: 5.07, type: ["fire", "flying"]});
 // pokemonRepository.getAll().forEach(function (pokemon){
   // pokemonRepository.addListItem(pokemon);
   //});
    
      //if (pokemons.size > 3) {
        //document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " wow this is a big pokemon!</p>");
    //}else if (pokemons.size > 1.5 && pokemons.size < 3) {
       // document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is an average pokemon</p>");
    //}else {
        //document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is a small pokemon</p>");
     // }
   

