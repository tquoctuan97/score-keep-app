import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import ListPlayer from '../imports/ui/ListPlayer';




Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = 'Score Keeper App';
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="Created by Tuan"/>
        <ListPlayer players={players}/>
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
