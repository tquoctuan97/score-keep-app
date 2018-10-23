import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const renderPlayers = playerList => {
  return playerList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
      </p>
    );
  });
};

const handleSubmit = function(e){
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

Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Tuấn';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        <p>This is my second p</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Add player" />
          <button>Add</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
