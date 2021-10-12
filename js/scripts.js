let pokemonRepository = (function (){
  let repository = [
     // {name: "Bulbasaur", size: 2.04, type: "water"},
     // {name: "Vulpix", size: 2.0, type: "fire"},
     // {name: "Growlithe", size: 2.04, type: "fire"},
     // {name: "Houndour", size: 2.0, type: ["dark", "fire"]},
     // {name: "Oddish", size: 1.08, type: ["grass", "poison"]},
     // {name: "Golem", size: 4.07, type: ["rock", "ground"]}
  ];
  let apiUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        repository.push(pokemon);
      }
  
    function getAll() {
        return repository;
      }

     function showDetails(pokemon){
       loadDetails(pokemon).then(function () {
       console.log(pokemon);
     });
    }
     
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function(){
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
        //add the hdetails to the item here?
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      }).catch(function (e) {
        console.error(e);
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

  //pokemonRepository.add({name: "Charizard", size: 5.07, type: ["fire", "flying"]});
  
  console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
   });
    
      //if (pokemons.size > 3) {
        //document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " wow this is a big pokemon!</p>");
    //}else if (pokemons.size > 1.5 && pokemons.size < 3) {
       // document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is an average pokemon</p>");
    //}else {
        //document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is a small pokemon</p>");
     // }
   

