import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GameBoardWrap, GameBoardSlot, GameBoardSlotRow } from './styled';
import GamePiece from '../../components/GamePiece';
import { selectSlotAction, endGameAction } from './actions';
import { ROWS, COLUMNS, WIN_CONDITIONS } from '../../utils';
import { COLORS } from '../../styles/themes';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningMatch: null,
    };

    this.selectSlot = this.selectSlot.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentPlayerTurn } = this.props;
    const didWin = this.didWin(nextProps.gameBoard, currentPlayerTurn);
    if (didWin) {
      this.endGame(didWin, currentPlayerTurn);
      return;
    }
    const draw = Object.keys(nextProps.gameBoard).length === ROWS.length * COLUMNS.length;
    if (draw) {
      this.endGame();
    }
  }

  selectSlot(slotId) {
    const { dispatch, gameBoard } = this.props;
    if (gameBoard[slotId]) return;
    dispatch(selectSlotAction(slotId));
  }

  endGame(winningMatch = [], currentPlayerTurn) {
    const { dispatch } = this.props;
    this.setState({ winningMatch }, () => {
      setTimeout(() => {
        dispatch(endGameAction(currentPlayerTurn));
      }, 1000);
    });
  }

  didWin(gameBoard, currentPlayerTurn) {
    return WIN_CONDITIONS.reduce((acc, winCondition) => {
      const inARow = winCondition.reduce((accumulator, value) => {
        return gameBoard[value] === currentPlayerTurn
          ? accumulator + 1
          : accumulator;
      }, 0);
      return inARow === 3 ? winCondition : acc;
    }, false);
  }

  createBoard() {
    const { players, gameBoard } = this.props;
    const { winningMatch } = this.state;
    return (
      <div>
        {ROWS.map(row => (
          <GameBoardSlotRow key={`row_${row}`}>
            {COLUMNS.map(col => {
              const slotId = `${row}${col}`;
              const winnerColor = (winningMatch && winningMatch.indexOf(slotId) !== -1)
               ? COLORS.GREEN : null;
              const owner = players.find(p => p.turn === gameBoard[slotId]);
              return (
                <GameBoardSlot
                  key={`slot_${slotId}`}
                  noTop={row === 'a'}
                  noLeft={col === '1'}
                  noBottom={row === 'c'}
                  noRight={col === '3'}
                  onClick={() => !winningMatch && this.selectSlot(slotId)}
                >
                  {
                    owner ? (
                      <GamePiece
                        winnerColor={winnerColor}
                        name={owner.gamePieceName}
                      />
                    ) : null
                  }
                </GameBoardSlot>
              );
            })}
          </GameBoardSlotRow>
        ))}
      </div>
    );
  }

  render() {
    return (
      <GameBoardWrap>
        {this.createBoard()}
      </GameBoardWrap>
    );
  }
}

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  players: PropTypes.array.isRequired, // Redux
  gameBoard: PropTypes.object.isRequired, // Redux
  currentPlayerTurn: PropTypes.number.isRequired, // Redux
};

const mapStateToProps = state => {
  const { players, gameBoard, currentPlayerTurn } = state.game;
  return {
    players,
    gameBoard,
    currentPlayerTurn,
  };
};

export default connect(mapStateToProps)(GameBoard);
