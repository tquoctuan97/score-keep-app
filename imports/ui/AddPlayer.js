import React, { Component } from 'react';
import Players from './../api/players';

class AddPlayer extends Component {
  handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
  
    e.preventDefault();
    
    if(playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }  
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Add player" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
