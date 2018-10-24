import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component {
    render(){
      return (
        <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
        </div>
      );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default TitleBar;