

async function fetchPokes() {
    let baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    let pokeIds = getIds();
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




