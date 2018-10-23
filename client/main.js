import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker'


Tracker.autorun(function(){
  console.log('Players list',Players.find().fetch());
})

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
},{
  _id: '2',
  name: 'Cory',
  score: -1
},{
  _id: '3',
  name: 'Tuan',
  score: -12
}];

const renderPlayers = function(playerList) {
  return playerList.map(function(player){
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
      </p>
    );
  });
}

Meteor.startup(function(){
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