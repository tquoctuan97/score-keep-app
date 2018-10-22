import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){
  let title = 'Score Keep';
  let name = 'Tuấn';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}</p>
      <p>This is my second p</p>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});