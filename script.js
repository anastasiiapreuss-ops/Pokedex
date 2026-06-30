
async function fetchPokemon() { // Lädt die ersten 20 Pokémon (Name + URL)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');// Anfrage an die PokeAPI senden
    const responseToJson = await response.json(); // Die Antwort in ein JavaScript-Objekt umwandeln
    renderPokemon(responseToJson);// Die Daten an die Render-Funktion übergeben
}

fetchPokemon();// Funktion direkt beim Start ausführen

async function renderPokemon(responseToJson) {// Rendert alle Pokémon
    const renderRef = document.getElementById('pokemonContent'); // Container holen, in den die Karten eingefügt werden
    renderRef.innerHTML = "";// Alten Inhalt löschen
    for (let i = 0; i < responseToJson.results.length; i++) { // Alle Pokémon aus dem results-Array durchlaufen
        // Das aktuelle Pokémon-Objekt speichern, enthält momentan nur:{name: "...",url: "..."}
        let pokemon = responseToJson.results[i];
        const pokemonData = await fetchPokemonData(pokemon.url); // Zweiten Fetch starten und die vollständigen Daten laden
        renderRef.innerHTML += templateContent(pokemonData);// Jetzt die komplette Pokémon-Karte anzeigen
    }
}

async function fetchPokemonData(url) {// Lädt die vollständigen Daten eines einzelnen Pokémon
    const response = await fetch(url);// Anfrage an die URL des Pokémon senden
    const dataResponseToJson = await response.json(); // Antwort in ein JavaScript-Objekt umwandeln
    return dataResponseToJson;// Die vollständigen Daten zurückgeben
}
