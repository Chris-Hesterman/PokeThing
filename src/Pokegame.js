import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { fetchPokes } from './getPokes';
import { shuffle } from './helpers';
import { DealButton } from './DealButton';
import './Pokegame.css';

class Pokegame extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            pokes: [
                {id: 718, name: "zygarde", exp: 270, type: "ground"},
                {id: 691, name: "dragalge", exp: 173, type: "dragon"},
                {id: 582, name: "vanillite", exp: 61, type: "ice"},
                {id: 509, name: "purrloin", exp: 56, type: "dark"},
                {id: 745, name: "lycanroc-midday", exp: 170, type: "rock"},
                {id: 698, name: "amaura", exp: 72, type: "ice"},
                {id: 352, name: "kecleon", exp: 154, type: "normal"},
                {id: 302, name: "sableye", exp: 133, type: "ghost"}
            ],
            className: 'Pokecard',
            clicked: false
        }
        this.handlePokes = this.handlePokes.bind(this);
    }
    
    handlePokes(pokes) {  
        pokes.then(results => {
            this.setState({ pokes: results, className: 'Pokecard-deal', clicked: true });
        });    
    }     

    render() {
        const order = shuffle();
        const pokes = order.map(index => this.state.pokes[index]);
        const nextPokes = fetchPokes();
        const handOne = pokes.slice(0,4);
        const handTwo = pokes.slice(4);
        const totalOne = handOne.reduce((acc, val) => {
                        return acc + val.exp; 
                        }, 0);
        const totalTwo = handTwo.reduce((acc, val) => {
                        return acc + val.exp;
                        }, 0);
        return (       
            <div className="Pokegame">
                <DealButton pokeGen={ this.handlePokes } newPokes={ nextPokes } />
                <div className="Pokegame-scores">
                    <h2>Player 1   Score: { totalOne }</h2>
                    <Pokedex key="pOne" hand={ handOne } total={ totalOne } cardClass={ this.state.className } isWinner={ totalOne > totalTwo } />    
                    <h2>Player 2   Score: { totalTwo }</h2>
                    <Pokedex key="pTwo" hand={ handTwo } total={ totalTwo } cardClass={ this.state.className } isWinner={ totalTwo > totalOne } />
                </div>
                
            </div>
        );
    }
}

export default Pokegame;