 const listaPokemon= document.querySelector("#pokemonesGeneral");
// const ListaPokemons = document.getElementById("pokemonesGeneral");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for ( let i = 1 ; i<20; i++){
 fetch(URL + i)
 .then((response) => response.json())
 .then(data=> mostrarPokemon(data))
    
}

function mostrarPokemon(poke){
    const div = document.createElement("div");
    div.classList.add("pokemon-todos");
    div.innerHTML=`
    <div class="pokemon">
    <p class="pokemond-id"> #${poke.id}</p>
    <div class="imagenes-pokemones">
        <img src="${poke.sprites.other["official-artwork"].front_default}">
    </div>
    <div class="info-pokemones">
        <div class="nombre">
            <h2 class="nombre-pokemones">${poke.species.name}</div>
        </div>
        <div class="altura">altura:${(poke.height)*10} cm</div>
        <div class="peso">peso:${poke.weight}kg </div>
    </div>
    </div>`;
listaPokemon.append(div);
}
{/* <img src="${poke.sprite.other["official-artwork"].front_default}">
</div> */}
/* <div id="todos">
       <div class="pokemones-todos" id="pokemonesGeneral">
        <div class="pokemon">
            <p class="pokemond-id"> 0025</p>
            <div class="imagenes-pokemones">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="Charizard">
            </div>
            <div class="info-pokemones">
                <div class="nombre">
                    <h2 class="nombre-pokemones">Charizard</div>
                </div>
            </div>
        </div>
       </div>
    </div> */