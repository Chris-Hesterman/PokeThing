import { getIds } from './helpers'

async function fetchPokes() {
    let pokeIds = getIds();
    let baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    let pokes = await Promise.all(
        pokeIds.map(id => {
            return fetch(`${baseUrl}${id}`).then(results => results.json());
        })
    );
    let pokeStats = pokes.map(pokeObj => {  
        let poke = {
            id: pokeObj.id,
            name: pokeObj.name,
            exp: pokeObj.base_experience,
            type: pokeObj.types[0].type.name
        };
        return poke;
    });
    return pokeStats;
}

const pokeStats = fetchPokes();


export { fetchPokes, pokeStats };

