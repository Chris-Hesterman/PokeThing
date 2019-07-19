import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {  
    render() {
        const hand = this.props.hand;
        const isWinner = this.props.isWinner;  
        return (
            <div>
                { isWinner ? 
                    <h2 className="Pokedex-winner">THIS HAND WINS!</h2>: 
                    <h2 className="Pokedex-loser">THIS HAND LOSES!</h2> 
                }
                <div className="Pokedex">
                    { hand.map(poke => <Pokecard key={ poke.name } poke={ poke } />) }
                </div>
            </div>         
        );  
    }
}

export default Pokedex;