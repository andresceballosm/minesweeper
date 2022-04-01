import { all } from 'redux-saga/effects';
import { sagaGame } from './game.saga';


export default function* rootSaga() {
    yield all([
        ...sagaGame,
    ]);
};