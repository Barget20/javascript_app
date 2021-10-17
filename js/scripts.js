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
  let modalContainer = document.querySelector("#modal-container");

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
        showModal(item.name, item.height, item.imageUrl);
    });
   }

  //let modalContainer = document.querySelector('#modal-container');
  
    function showModal (title, text, image) {
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
    
    //this adds new content below//
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
    
      let titleElement = document.createElement('h1');
      titleElement.innerText = title;
  
      let contentElement = document.createElement('p');
      contentElement.innerText = text;

      let contentElement = document.createElement('div');
      let imageElement = document.createElement('img');
      imageElement.src = image;
  
      contentElement.appendChild(textElement);
      contentElement.appendChild(imageElement);

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
    }
  
      let dialogPromiseReject; 
     
    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
       modalContainer.classList.remove('is-visible');
  
      if (dialogPromiseReject) {
         dialogPromiseReject();
         dialogPromiseReject = null;
      }
    } 
    
    
      //!!below adds a confirm and cancel button!! 
    //let modal = modalContainer.querySelector('.modal');
      
    //let confirmButton = document.createElement('button');
    //  confirmButton.classList.add('modal-confirm');
      //confirmButton.innerText = 'Confirm';
  
    //let cancelButton = document.createElement('button');
     // cancelButton.classList.add('modal-cancel');
      //cancelButton.innerText = 'Cancel';
  
    //modal.appendChild(confirmButton);
   // modal.appendChild(cancelButton);
  
    //confirmButton.focus();
  
    //return new Promise((resolve, reject) => {
       // cancelButton.addEventListener('click', hideModal);
        //confirmButton.addEventListener('click', () => {
         // dialogPromiseReject = null;
          //hideModal();
         // resolve();
      //});
     // dialogPromiseReject = reject;
    //});
  //}
  
//document.querySelector('#show-dialog').addEventListener('click', () => {
  //showDialog('Confirm action', 'Are you sure you want to do this?').then(function () {
       // alert('confirmed!');
    //}, () => {
       // alert('not confirmed');
   // });
//});
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
        hideModal ();
    }
  });

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