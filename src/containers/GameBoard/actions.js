import { SELECT_SLOT, END_GAME } from '../../constants';

export function selectSlotAction(slotId) {
  return {
    type: SELECT_SLOT,
    slotId,
  };
}
export function endGameAction(winnerTurn) {
  return {
    type: END_GAME,
    winnerTurn,
  };
}
