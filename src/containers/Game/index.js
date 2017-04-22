import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  GameWrap,
  GameBoardWrap,
  HeaderWrap,
  HeaderSection,
  PieceWrap,
  WinnerView,
  WinnerText,
  ResetButton,
} from './styled';
import GameBoard from '../GameBoard';
import GamePiece from '../../components/GamePiece';
import { switchStartTurnAction, resetGameAction } from './actions';

class Game extends Component {

  switchStartTurn(turn) {
    const { dispatch, gameBoard, currentPlayerTurn } = this.props;
    if (Object.keys(gameBoard).length || currentPlayerTurn === turn) return;
    dispatch(switchStartTurnAction(turn));
  }

  resetGame() {
    const { dispatch } = this.props;
    dispatch(resetGameAction());
  }

  renderWinMessage(winner) {
    switch (winner) {
      case '1':
        return 'X wins!';
      case '2':
        return 'O Wins!';
      default:
        return 'Draw!';
    }
  }

  renderHeader() {
    const { players, currentPlayerTurn } = this.props;
    return (
      <HeaderWrap>
        {
          players.map(p => (
            <HeaderSection
              key={`player_${p.turn}`}
              turn={currentPlayerTurn === p.turn}
              onClick={() => this.switchStartTurn(p.turn)}
            >
              <PieceWrap>
                <GamePiece name={p.gamePieceName} small />
              </PieceWrap>
              <span>{ p.wins }</span>
            </HeaderSection>
          ))
        }
      </HeaderWrap>
    );
  }

  render() {
    const { winner } = this.props;
    return (
      <GameWrap>
        {this.renderHeader()}
        <GameBoardWrap aspectRatio="1:1">
          {
            winner ? (
              <WinnerView>
                <WinnerText>
                  {this.renderWinMessage(winner)}
                </WinnerText>
                <ResetButton onClick={() => this.resetGame()}>
                  Play Again
                </ResetButton>
              </WinnerView>
            ) : (
              <GameBoard />
            )
          }
        </GameBoardWrap>
      </GameWrap>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  players: PropTypes.array.isRequired, // Redux
  currentPlayerTurn: PropTypes.number.isRequired, // Redux
  gameBoard: PropTypes.object.isRequired, // Redux
  winner: PropTypes.string, // Redux
};

Game.defaultProps = {
  winner: null,
};

const mapStateToProps = state => {
  const { players, currentPlayerTurn, gameBoard, winner } = state.game;
  return {
    players,
    currentPlayerTurn,
    gameBoard,
    winner,
  };
};

export default connect(mapStateToProps)(Game);
