
let buttonRef = document.getElementById("generateButton");
let mainInput = document.getElementById("Pokeinput");
let pokemonImg = document.getElementById("Pokeimg");
let pokemonTitle = document.getElementById("Poketitle");
let shinyquest = document.getElementById("Isshiny")

// shiny
let yourNum = document.getElementById("Shiny");
let chancenum = document.getElementById("ShinyChance")

//random
let randomnm = Math.floor(Math.random() * 2);
let shinychance = Math.floor(Math.random() * 2);
console.log(randomnm);
console.log(shinychance);


let shiny;
function fetchPokemon(event) {
    event.preventDefault();
    shinychance = Math.floor(Math.random() * 2);
    console.log(shinychance);

    let userInput = mainInput.value
    console.log(userInput);

    fetch('https://pokeapi.co/api/v2/pokemon/' + userInput)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        //show
        let pokemonImageUrl = myJson.sprites.front_default;

        if (randomnm == shinychance) {
            pokemonImageUrl = myJson.sprites.front_shiny;
            shiny = "Yes";
        }
        else {
            shiny = "NO";
        }

        if (myJson.status == "error") {
            pokemonImg.src = "";
            pokemonTitle.innerText = "Pokémon not found";

        }
            else {
            pokemonImg.src = pokemonImageUrl;
            pokemonImg.style.width = "200px"; 
             pokemonTitle.innerText = "Name: " + myJson.name;
        }

        yourNum.innerText = "Your number: " + randomnm;
        chancenum.innerText = "Shiny number: " + shinychance;
        shinyquest.innerText = "Is shiny = " + shiny;


    })
}


buttonRef.addEventListener("click", fetchPokemon);
