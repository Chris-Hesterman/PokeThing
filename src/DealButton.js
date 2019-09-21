import React, { Component } from 'react';



class DealButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {   
        this.props.pokeGen(this.props.newPokes);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Re-Shuffle!</button>
            </div>
        )
    }
}

export { DealButton } 