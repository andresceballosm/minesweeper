import { PayloadAction } from '@reduxjs/toolkit';
import { EventChannel, eventChannel } from 'redux-saga';
import { apply, call, put, take, takeLatest } from 'redux-saga/effects';
// actions
import { setMap, setStatus } from '../reducers/game.slice';
import { setLoading } from '../reducers/app.slice';

// constants
import { actionIds } from '../constants/game-actions.constants';

function websocketInitChannel(socket: WebSocket) {
  return eventChannel((emitter) => {
    const onMessage = (event: MessageEvent) => {
      emitter(event.data);
    };

    const errorHandler = (errorEvent: Event) => {
      emitter(new Error(errorEvent.type));
    };

    socket.addEventListener('message', onMessage);
    socket.addEventListener('error', errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener('message', onMessage);
    };

    return unsubscribe;
  });
}

function* listeningGame(values: BaseAction) {
  const socket = values.payload;
  const socketChannel: EventChannel<unknown> = yield call(websocketInitChannel, socket);
  while (true) {
    try {
      const response: string = yield take(socketChannel);
      if (response.includes('new:')) {
        yield apply(socket, socket.send, ['map']);
        yield put(setStatus(response.replace('new: ', '')));
      }
      if (response.includes('map:')) {
        yield put(setMap(response.replace('map:', '')));
      }
      if (response.includes('open:')) {
        yield apply(socket, socket.send, ['map']);
        yield put(setStatus(response.replace('open: ', '')));
      }
    } catch (err) {
      socketChannel.close();
      throw new Error(`Error: ${err}`);
    }
  }
}

function* startGame(action: PayloadAction<NewGameAction>) {
  try {
    const { socket, level } = action.payload;
    yield apply(socket, socket.send, [level]);
    yield put(setLoading(true));
  } catch (err) {
    yield put(setLoading(false));
  } finally {
    yield put(setLoading(false));
  }
}

export const sagaGame = [
  takeLatest(actionIds.INIT_GAME, listeningGame),
  takeLatest(actionIds.START_GAME, startGame),
];
