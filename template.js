function templateContent(pokemonData) {
    console.log(pokemonData);
    let type = pokemonData.types[0].type.name;
    return `
         <section class="pokemon_card">
            <header class="header_card">
                <p>#${pokemonData.id}</p>
                <h2>${pokemonData.name}</h2>
            </header>
            <section class="main_card ${type}">
                <img src="${pokemonData.sprites.other.dream_world.front_default}" alt="">
            </section>
            <footer class="footer_card">
               <div class="icon_typ_style ${type}"><img src="./assets/icons/${type}.svg" alt=""></div> 
            </footer>
        </section>
        `
}