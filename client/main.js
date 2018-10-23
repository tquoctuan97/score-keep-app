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

Meteor.startup(function() {
  // Call tracker.autorun
  // Create variable called players -> set equal to fetch query
  // Render player to the screen

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
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  //insert new doc into collection
    Players.insert({
      name: 'Hang',
      score: 99
  });
});
