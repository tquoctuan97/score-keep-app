import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = playerList => {
  return playerList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => {
          Players.update(player._id,{
            $inc: {score: 1}
          });
        }}>+1</button>
        <button onClick={() => {
          Players.update(player._id,{
            $inc: {score: -1}
          });
        }}>-1</button>
        <button onClick={() => {
          Players.remove(player._id);
        }}>X</button>
      </p>
    );
  });
};


Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'Score Keeper App';
    let author = 'Tuan';
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title={title} subtitle={author}/>
        {renderPlayers(players)}
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
