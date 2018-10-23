import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
    Players.insert({
        name: 'Xuan',
        score: 10
    });
    console.log(Players.find().fetch());
});
