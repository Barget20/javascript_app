let pokemonRepository = (function (){
  let repository = [
      {name: "Bulbasaur", size: 2.04, type: "water"},
      {name: "Vulpix", size: 2.0, type: "fire"},
      {name: "Growlithe", size: 2.04, type: "fire"},
      {name: "Houndour", size: 2.0, type: ["dark", "fire"]},
      {name: "Oddish", size: 1.08, type: ["grass", "poison"]},
      {name: "Golem", size: 4.07, type: ["rock", "ground"]}
  ];

    function add(pokemon) {
        repository.push(pokemon);
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
      button.addEventListener('click', function(){
        showDetails(pokemon)
      });
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails
    };
  })();

  pokemonRepository.add({name: "Charizard", size: 5.07, type: ["fire", "flying"]}));
  
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
   

