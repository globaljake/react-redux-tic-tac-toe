import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { X, O } from './styled';

class GamePiece extends Component {

  renderPiece(name, small, winnerColor) {
    switch (name.toLowerCase()) {
      case 'x':
        return <X small={small} winnerColor={winnerColor} />;
      case 'o':
        return <O small={small} winnerColor={winnerColor} />;
      default:
        return <div />;
    }
  }

  render() {
    const { name, small, winnerColor } = this.props;
    return this.renderPiece(name, small, winnerColor);
  }
}

GamePiece.propTypes = {
  name: PropTypes.string.isRequired,
  winnerColor: PropTypes.string,
  small: PropTypes.bool,
};

GamePiece.defaultProps = {
  small: false,
  winnerColor: null,
};

export default GamePiece;
