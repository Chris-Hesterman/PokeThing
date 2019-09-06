import React, { Component } from 'react';

class Deal extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.setState({ clicked: true });
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

export { Deal } 