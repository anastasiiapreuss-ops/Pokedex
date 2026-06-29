async function fetchPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response);
    const responseToJson = await response.json();
    console.log(responseToJson);

    // document.getElementById('pokemonContent').innerHTML = responseToJson.name;
}

fetchPokemon();