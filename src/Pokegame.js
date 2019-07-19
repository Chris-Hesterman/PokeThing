import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { index } from './helper';
import './Pokegame.css';

class Pokegame extends Component {  
    static defaultProps = {
        pokes: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render() {
        const pokeArr= index();
        const playerOne = pokeArr.slice(0,4);
        const playerTwo = pokeArr.slice(4);
        const handOne = playerOne.map(index => this.props.pokes[index]);
        const handTwo = playerTwo.map(index => this.props.pokes[index]);
        const totalOne = handOne.reduce((acc, next) => {
                        return acc + next.base_experience;
                        }, 0);
        const totalTwo = handTwo.reduce((acc, next) => {
                        return acc + next.base_experience;
                        }, 0);
        return (       
            <div className="Pokegame">
                <h2>Player 1   Score: { totalOne }</h2>
                <Pokedex key="pOne" hand={ handOne } total={ totalOne } isWinner={ totalOne > totalTwo } />    
                <h2>Player 2   Score: { totalTwo }</h2>
                <Pokedex key="pTwo" hand={ handTwo } total={ totalTwo } isWinner={ totalTwo > totalOne } />
            </div>
        );
    }
}

export default Pokegame;