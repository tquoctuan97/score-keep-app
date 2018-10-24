import React, { Component } from 'react';
import {Players} from './../api/players';

class AddPlayer extends Component {
  handleSubmit = (e) => {
    let player = e.target.playerName.value;
    e.preventDefault();
    if(player){
      e.target.playerName.value = '';
      Players.insert({
        name: player,
        score: 0
      })
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
