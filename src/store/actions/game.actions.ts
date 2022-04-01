import { actionIds } from '../constants/game-actions.constants';

export const initGame = (socket: WebSocket): BaseAction => ({
  type: actionIds.INIT_GAME,
  payload: socket,
});

export const startGame = (socket: WebSocket, level: string): BaseAction => ({
  type: actionIds.START_GAME,
  payload: { socket, level },
});