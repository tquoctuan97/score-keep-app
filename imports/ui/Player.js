import React, { Component } from 'react';
import { Players } from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends Component {
  render() {
    let { player } = this.props;
    return (
      <div>
        <p>
          {player.name} has {player.score} point(s).
          <button
            onClick={() => {
              Players.update(player._id, {
                $inc: { score: 1 }
              });
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              Players.update(player._id, {
                $inc: { score: -1 }
              });
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              Players.remove(player._id);
            }}
          >
            X
          </button>
        </p>
      </div>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
}
