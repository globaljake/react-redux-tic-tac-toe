import { SWITCH_START_TURN, SELECT_SLOT, END_GAME, RESET_GAME } from '../constants';

const initialState = {
  gameBoard: {},
  players: [
    { turn: 1, gamePieceName: 'x', wins: 0 },
    { turn: 2, gamePieceName: 'o', wins: 0 },
  ],
  currentPlayerTurn: 1,
  winner: null,
};

export default function reducer(substate = initialState, action) {
  switch (action.type) {
    case SWITCH_START_TURN:
      return {
        ...substate,
        currentPlayerTurn: action.turn,
      };
    case SELECT_SLOT:
      const { gameBoard, currentPlayerTurn, players } = substate;
      return {
        ...substate,
        gameBoard: {
          ...gameBoard,
          [action.slotId]: currentPlayerTurn,
        },
        currentPlayerTurn: currentPlayerTurn % players.length !== 0 ? currentPlayerTurn + 1 : 1,
      };
    case END_GAME:
      if (!action.winnerTurn) {
        return {
          ...substate,
          winner: 'draw',
          gameBoard: {},
        };
      }
      return {
        ...substate,
        players: substate.players.map(p => {
          const winner = { ...p, wins: p.wins + 1 };
          return action.winnerTurn === p.turn ? winner : p;
        }),
        winner: `${action.winnerTurn}`,
      };
    case RESET_GAME:
      return {
        ...substate,
        players: substate.players.map(p => {
          const winner = { ...p, wins: p.wins + 1 };
          return action.winnerTurn === p.turn ? winner : p;
        }),
        winner: null,
        gameBoard: {},
        currentPlayerTurn: 1,
      };
    default:
      return substate;
  }
}
