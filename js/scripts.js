var pokemonRepository = (function (){
    var pokemonList = [
        {name: "Bulbasaur", size: 2.04, type: "water"},
        {name: "Vulpix", size: 2.0, type: "fire"},
        {name: "Growlithe", size: 2.04, type: "fire"},
        {name: "Houndour", size: 2.0, type: ["dark", "fire"]},
        {name: "Oddish", size: 1.08, type: ["grass", "poison"]},
        {name: "Golem", size: 4.07, type: ["rock", "ground"]}
    ];

      function add(pokemon) {
          pokemonList.push(pokemon);
        }
    
      function getAll() {
          return pokemonList;
        }
      
      return {
        add: add,
        getAll: getAll
      };
    })();
    
    console.log ( pokemonRepository.getAll());

    console.log ( pokemonRepository.add({name: "Charizard", size: 5.07, type: ["fire", "flying"]}));
    
    
    pokemonRepository.getAll().forEach(function (pokemons){
      if (pokemons.size > 3) {
        document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " wow this is a big pokemon!</p>");
    }else if (pokemons.size > 1.5 && pokemons.size < 3) {
        document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is an average pokemon</p>");
    }else {
        document.write("<p> name:" + pokemons.name + " height: " + pokemons.size + " this is a small pokemon</p>");
    }
    });

//let pokemons = ["Bulbasaur", "Vulpix", "Growlithe", "Houndour", "Oddish", "Golem",];
//let text = "";
//let i = 0;
//for (;pokemons[i];){
  //  text = text + " " + pokemons[i];
    //i++;
//}
//console.log(text); 
