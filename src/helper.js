
function index() {
    const pickArray = [];
    for(let i = 0; i < 8; i++) {
        let pokeIndex = Math.floor((Math.random() * 8));
        if(pickArray.includes(pokeIndex)) {
            i--;
        } else {
            pickArray.push(pokeIndex);
        }
    }
    return pickArray;
}

export { index }  