
var pokemonList;

let pokemons = [
    {name: "Bulbasaur", size: 2.04, type: "water"},
    {name: "Vulpix", size: 2.0, type: "fire"},
    {name: "Growlithe", size: 2.04, type: "fire"},
    {name: "Houndour", size: 2.0, type: ["dark", "fire"]},
    {name: "Oddish", size: 1.08, type: ["grass", "poison"]},
    {name: "Golem", size: 4.07, type: ["rock", "ground"]}
];

console.log(pokemons);


for (let i = 0; i < pokemons.size; i++){
   if (pokemons[i].size > 3) {
    document.write("<p> name:" + pokemons[i].name + " height: " + pokemons[i].size + "wow this is a big pokemon!</p>");
}else if (pokemons[i].size > 1.5 && pokemons[i].size < 3)
    document.write("<p> name:" + pokemons[i].name + " height: " + pokemons[i].size + "this is an average pokemon</p>";
}else {
    document.write("<p> name:" + pokemons[i].name + " height: " + pokemons[i].size + "this is a small pokemon</p>");
}
}

//let pokemons = ["Bulbasaur", "Vulpix", "Growlithe", "Houndour", "Oddish", "Golem",];
//let text = "";
//let i = 0;
//for (;pokemons[i];){
  //  text = text + " " + pokemons[i];
    //i++;
//}
//console.log(text); 
