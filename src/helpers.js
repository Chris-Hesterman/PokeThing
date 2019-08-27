
function getIds() {
    const pickArray = [];
    for(let i = 0; i < 8; i++) {
        let pokeIndex = Math.ceil((Math.random() * 800));
        if(pickArray.includes(pokeIndex)) {
            i--;
        } else {
            pickArray.push(pokeIndex);
        }
    }
    return pickArray;
}

function shuffle() {
    const shuffled = []
    for(let i = 0; i < 8; i++) {
        let index = Math.floor((Math.random() * 8));
        if(shuffled.includes(index)) {
            i--;
        } else {
            shuffled.push(index)
        }
    }
    return shuffled;
}

export { getIds, shuffle };