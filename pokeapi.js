
const pokemonContainer = document.querySelector('.pokemon-container');
const buscador = document.querySelector('.buscador');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    consumirPokeApi(buscador.value);
})

function consumirPokeApi(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res=>res.json())
        .then(data =>{
            crearPokemon(data);
            console.log(data)
        }
        )
}

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3)

    pokemonContainer.appendChild(div);
}


