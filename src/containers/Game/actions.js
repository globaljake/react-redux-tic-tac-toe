import { SWITCH_START_TURN, RESET_GAME } from '../../constants';

export function switchStartTurnAction(turn) {
  return {
    type: SWITCH_START_TURN,
    turn,
  };
}

export function resetGameAction() {
  return {
    type: RESET_GAME,
  };
}
