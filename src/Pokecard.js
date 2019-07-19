import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {  
        const poke = this.props.poke; 
        const id = poke.id.toString().padStart(3, "0") 
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ id }.png`   
        return (
            <div className="Pokecard">
              <img className="Pokecard-img" src={ url } alt={ poke.name }/> 
              <div className="Pokecard-stats">
                <h2><strong>{ poke.name }</strong></h2>
                <p><strong>Type:</strong> { poke.type }</p>  
                <p><strong>   Experience:</strong> { poke.base_experience }</p>
              </div>  
            </div>
        );
    }
}
   
export default Pokecard;